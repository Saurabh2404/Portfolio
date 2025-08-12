export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-6 border border-orange-200 rounded-2xl bg-white shadow-md transition duration-300 transform hover:scale-[1.03] hover:border-pink-300 hover:bg-gray-100">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <a
        href={link}
        className="inline-block bg-orange-200 text-black font-medium px-5 py-2 rounded-full hover:bg-orange-400 hover:text-white transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  )
}
