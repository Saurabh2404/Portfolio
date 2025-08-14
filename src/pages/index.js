import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiCplusplus, SiLeetcode, SiMongodb, SiExpress, SiPostman } from 'react-icons/si'

const projects = [
  {
    title: 'Algo-Engine using Word Embedding Techniques',
    description: 'A smart platform that aggregates and searches coding problems using contextual word embedding (BERT + TF-IDF).',
    link: 'https://github.com/Saurabh2404/ProblemSearcher',
  },
  {
    title: 'Job Application Portal',
    description: 'A full-stack portal with authentication, job postings, and admin control for managing applicants.',
    link: 'https://github.com/Saurabh2404/Job-Application-Portal',
  },
  {
    title: 'Tech-Blog',
    description: 'Tech-Blog is a platform to share and explore technical blogs on topics like programming, AI, and cybersecurity.Users can publish their own articles or read others’ posts.',
    link: 'https://github.com/Saurabh2404/TechBlog',
  },
  {
    title: 'Smart Expense Tracker',
    description: 'Smart Expense Tracker is a budget management tool that helps users track and manage their expenses efficiently.It features secure user authentication to protect personal financial data.',
    link: 'https://github.com/your-username/smart-expense-tracker',
  }
]

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
  { name: 'Node.js', icon: <FaJs size={32} className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-700" /> },
  { name: 'Postman', icon: <SiPostman size={32} className="text-orange-400" /> },
  { name: 'Mongoose', icon: <SiMongodb size={32} className="text-green-500" /> },
]

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-100 via-white to-yellow-50 relative"
      style={{
        backgroundImage: "url('/tech-bg.png')", // Add your image in /public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.95
      }}
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12 relative z-10">
        
        {/* Intro Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12 bg-opacity-90">
          <div className="flex flex-col md:flex-row items-center md:items-start">
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
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Hi, I am <span style={{ color: '#D94D1A' }}>Saurabh Kumar Singh</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                I am a backend developer with expertise in building scalable, high-performance applications. 
                Proficient in Node.js, Express.js, MongoDB, Spring Boot, Core Java, Microservices, WebLogic, and Next.js, 
                I bring strong problem-solving skills and a deep interest in crafting efficient solutions.
              </p>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 bg-orange-500 px-8 py-4 rounded-full shadow-md">
              My Projects
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {projects.map(({ title, description, link }) => (
              <div key={title} className="transform transition-transform duration-300 hover:scale-[1.02]">
                <ProjectCard title={title} description={description} link={link} />
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mt-12 bg-opacity-90">
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
      </main>
      <Footer />
    </div>
  )
}