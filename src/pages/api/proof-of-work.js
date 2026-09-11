import { proofOfWork } from "@/data/portfolio";

const CODOLIO_PROFILE_URL = "https://api.codolio.com/profile?userKey=RapidSaurabh";

function numberOrFallback(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getProfiles(payload) {
  return payload?.data?.platformProfiles?.platformProfiles || [];
}

function readQuestionStats(profile) {
  const stats = profile?.totalQuestionStats || {};
  const easy =
    Number(stats.easyQuestionCounts || 0) +
    Number(stats.basicQuestionCounts || 0) +
    Number(stats.schoolQuestionCounts || 0);

  return {
    easy,
    medium: Number(stats.mediumQuestionCounts || 0),
    hard: Number(stats.hardQuestionCounts || 0),
    basic: Number(stats.basicQuestionCounts || 0),
    school: Number(stats.schoolQuestionCounts || 0),
    total: Number(stats.totalQuestionCounts || 0),
  };
}

function countContestEntries(profile) {
  return profile?.contestActivityStats?.contestActivityList?.length || 0;
}

function countActiveDays(profiles) {
  const days = new Set();

  profiles.forEach((profile) => {
    const calendar = profile?.dailyActivityStatsResponse?.submissionCalendar || {};
    Object.entries(calendar).forEach(([timestamp, count]) => {
      if (Number(count) > 0) days.add(timestamp);
    });
  });

  return days.size;
}

function findPlatform(profiles, platform) {
  return profiles.find((profile) => profile.platform?.toLowerCase() === platform);
}

function getRating(profile) {
  return {
    value: String(numberOrFallback(profile?.userStats?.currentRating, 0)),
    max: profile?.userStats?.maxRating,
    rank: profile?.userStats?.rank || profile?.userStats?.maxRank || profile?.userStats?.userLevelName,
  };
}

function readPlatformBreakdown(profiles) {
  return profiles.map((profile) => {
    const stats = readQuestionStats(profile);
    return {
      platform: profile.platform,
      solved: stats.total,
      isVerified: Boolean(profile.isVerified),
      handle: profile.userStats?.handle || "",
      lastUpdatedAt: profile.lastUpdatedAt || null,
    };
  });
}

function aggregateTopics(profiles) {
  const topics = {};

  profiles.forEach((profile) => {
    const distribution = profile?.topicAnalysisStats?.topicWiseDistribution || {};
    Object.entries(distribution).forEach(([topic, value]) => {
      const normalized = topic
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
      topics[normalized] = (topics[normalized] || 0) + Number(value || 0);
    });
  });

  return Object.entries(topics)
    .sort((first, second) => second[1] - first[1])
    .slice(0, 6)
    .map(([label, value]) => ({ label, value }));
}

function buildFromCodolio(payload) {
  const profiles = getProfiles(payload);
  const totals = profiles.reduce(
    (acc, profile) => {
      const stats = readQuestionStats(profile);
      acc.easy += stats.easy;
      acc.medium += stats.medium;
      acc.hard += stats.hard;
      acc.total += stats.total;
      acc.contests += countContestEntries(profile);
      return acc;
    },
    { easy: 0, medium: 0, hard: 0, total: 0, contests: 0 }
  );

  const totalSolved = numberOrFallback(totals.total, Number(proofOfWork.stats[0].value));
  const easy = numberOrFallback(totals.easy, 437);
  const medium = numberOrFallback(totals.medium, 601);
  const hard = numberOrFallback(totals.hard, 86);
  const activeDays = numberOrFallback(countActiveDays(profiles), Number(proofOfWork.stats[1].value));
  const contestCount = numberOrFallback(totals.contests, Number(proofOfWork.stats[2].value));
  const leetcode = getRating(findPlatform(profiles, "leetcode"));
  const codechef = getRating(findPlatform(profiles, "codechef"));
  const codeforces = getRating(findPlatform(profiles, "codeforces"));
  const codestudio = getRating(findPlatform(profiles, "codestudio"));
  const codeChefQuestions = readQuestionStats(findPlatform(profiles, "codechef")).total || 325;
  const codeforcesQuestions = readQuestionStats(findPlatform(profiles, "codeforces")).total || 145;
  const gfg = readQuestionStats(findPlatform(profiles, "geeksforgeeks"));
  const hackerrankQuestions = readQuestionStats(findPlatform(profiles, "hackerrank")).total || 190;
  const topicAnalysis = aggregateTopics(profiles);

  return {
    ...proofOfWork,
    source: "live",
    sourceLabel: "Live from Codolio",
    updatedFrom: "Synced from Codolio",
    lastSyncedAt: new Date().toISOString(),
    platformBreakdown: readPlatformBreakdown(profiles),
    stats: proofOfWork.stats.map((stat) => {
      if (stat.label === "Questions Solved") return { ...stat, value: String(totalSolved) };
      if (stat.label === "Active Days") return { ...stat, value: String(activeDays) };
      if (stat.label === "Contests Attended") return { ...stat, value: String(contestCount) };
      return stat;
    }),
    distributions: proofOfWork.distributions.map((distribution) => {
      if (distribution.title === "Fundamentals") {
        return {
          ...distribution,
          total: String((gfg.basic || 0) + (gfg.school || 0) + hackerrankQuestions),
          items: [
            { label: "GFG Basic", value: (gfg.basic || 0) + (gfg.school || 0) },
            { label: "HackerRank", value: hackerrankQuestions },
          ],
        };
      }
      if (distribution.title === "Competitive Programming") {
        return {
          ...distribution,
          total: String(codeChefQuestions + codeforcesQuestions),
          items: [
            { label: "CodeChef", value: codeChefQuestions },
            { label: "Codeforces", value: codeforcesQuestions },
          ],
        };
      }
      if (distribution.title !== "DSA") return distribution;
      return {
        ...distribution,
        total: String(easy + medium + hard),
        items: [
          { label: "Easy", value: easy },
          { label: "Medium", value: medium },
          { label: "Hard", value: hard },
        ],
      };
    }),
    rankings: [
      { platform: "LeetCode", value: leetcode.value, note: `max: ${leetcode.max || 1620}` },
      { platform: "CodeChef", value: codechef.value, note: `max: ${codechef.max || 1690}` },
      {
        platform: "Codeforces",
        value: codeforces.value,
        note: `${codeforces.rank || "Pupil"}, max: ${codeforces.max || 1418}`,
      },
      { platform: "CodeStudio", value: codestudio.value, note: codestudio.rank || "Achiever" },
    ],
    topicAnalysis: topicAnalysis.length ? topicAnalysis : proofOfWork.topicAnalysis,
  };
}

export default async function handler(req, res) {
  const forceRefresh = req.query.refresh === "1";
  res.setHeader(
    "Cache-Control",
    forceRefresh ? "no-store" : "s-maxage=900, stale-while-revalidate=3600"
  );

  try {
    const url = forceRefresh ? `${CODOLIO_PROFILE_URL}&_=${Date.now()}` : CODOLIO_PROFILE_URL;
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        accept: "*/*",
        "cache-control": "no-cache",
        pragma: "no-cache",
        referer: "https://codolio.com/",
      },
    });

    if (!response.ok) {
      return res.status(200).json(proofOfWork);
    }

    const payload = await response.json();
    return res.status(200).json(buildFromCodolio(payload));
  } catch {
    return res.status(200).json(proofOfWork);
  }
}
