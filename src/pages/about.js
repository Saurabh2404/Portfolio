import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiCplusplus, SiLeetcode, SiCodeforces, SiCodechef, SiMongodb, SiExpress, SiPostman, SiHackerrank } from 'react-icons/si'

export default function About() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={32} className="text-orange-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-cyan-500" /> },
    { name: 'JavaScript', icon: <FaJs size={32} className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava size={32} className="text-red-500" /> },
    { name: 'C++', icon: <SiCplusplus size={32} className="text-blue-600" /> },
    { name: 'Python', icon: <FaPython size={32} className="text-blue-400" /> },
    { name: 'SQL', icon: <FaDatabase size={32} className="text-green-500" /> },
    { name: 'Problem Solving', icon: <SiLeetcode size={32} className="text-yellow-500" /> },
    { name: 'Backend Development', icon: <SiExpress size={32} className="text-black" /> },
    { name: 'Stock Trading', icon: <FaDatabase size={32} className="text-purple-500" /> },
    { name: 'Node.js', icon: <FaJs size={32} className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-700" /> },
    { name: 'Postman', icon: <SiPostman size={32} className="text-orange-400" /> },
    { name: 'Mongoose', icon: <SiMongodb size={32} className="text-green-500" /> },
  ]

  const codingProfiles = [
    { name: 'LeetCode', icon: <SiLeetcode size={32} className="text-yellow-500" />, link: 'https://leetcode.com/u/rapidsaurabh2404/' },
    { name: 'Codeforces', icon: <SiCodeforces size={32} className="text-blue-600" />, link: 'https://codeforces.com/profile/RapidSaurabh' },
    { name: 'CodeChef', icon: <SiCodechef size={32} className="text-purple-600" />, link: 'https://www.codechef.com/users/saurabh2196991' },
    { name: 'HackerRank', icon: <SiHackerrank size={32} className="text-green-600" />, link: 'https://www.hackerrank.com/profile/saurabh2196991' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
            <Image
              src="/saurabh.jpg"
              alt="Saurabh Kumar"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-orange-500">Me</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Hello! I'm <span className="font-semibold text-black">Saurabh Kumar</span>, a passionate web developer and problem solver.
              I completed my <span className="font-semibold text-black">Bachelor of Engineering</span> from
              <span className="font-semibold text-black"> Army Institute of Technology</span>, located in Dighi Hills, Pune.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Skills</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-orange-50 border border-orange-200 rounded-lg p-4 w-32 h-32 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                {skill.icon}
                <span className="mt-3 text-lg font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles Section */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coding Profiles</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-orange-50 border border-orange-200 rounded-lg p-4 w-32 h-32 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                {profile.icon}
                <span className="mt-3 text-lg font-medium text-gray-800">{profile.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}