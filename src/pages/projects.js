import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Algo-Engine using Word Embedding Techniques',
    description:
      'A smart platform that aggregates and searches coding problems using contextual word embedding (BERT + TF-IDF).',
    link: 'https://github.com/Saurabh2404/ProblemSearcher', // <-- GitHub Link
  },
  {
    title: 'Job Application Portal',
    description:
      'A full-stack portal with authentication, job postings, and admin control for managing applicants.',
    link: 'https://github.com/Saurabh2404/Job-Application-Portal',
  },
  {
    title: 'Tech-Blog',
    description:
      'Tech-Blog is a platform to share and explore technical blogs on topics like programming, AI, and cybersecurity. Users can publish their own articles or read others’ posts.',
    link: 'https://github.com/Saurabh2404/TechBlog',
  },
  {
    title: 'Smart Expense Tracker',
    description:
      'Smart Expense Tracker is a budget management tool that helps users track and manage their expenses efficiently.It features secure user authentication to protect personal financial data.',
    link: 'https://github.com/your-username/smart-expense-tracker',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <h1 className="text-3xl font-bold text-white bg-orange-500 px-8 py-4 rounded-full shadow-md">
            My Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map(({ title, description, link }) => (
            <div
              key={title}
              className="transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <ProjectCard
                title={title}
                description={description}
                link={link}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}