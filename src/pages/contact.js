import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-100 via-white to-yellow-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-700">
            Feel free to reach out to me via any of the platforms below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 text-center">
          {/* Contact Items */}
          <ContactItem
            icon={<FaWhatsapp size={32} className="text-green-500" />}
            label="WhatsApp"
            link="https://wa.me/6205809417"
          />
          <ContactItem
            icon={<FaInstagram size={32} className="text-pink-500" />}
            label="Instagram"
            link="https://instagram.com/rapidsaurabh"
          />
          <ContactItem
            icon={<FaPhone size={32} className="text-blue-500" />}
            label="Phone"
            link="tel:+91XXXXXXXXXX"
          />
          <ContactItem
            icon={<FaEnvelope size={32} className="text-red-500" />}
            label="Email"
            link="mailto:your.email@example.com"
          />
          <ContactItem
            icon={<FaGithub size={32} className="text-gray-800" />}
            label="GitHub"
            link="https://github.com/your_username"
          />
          <ContactItem
            icon={<FaLinkedin size={32} className="text-blue-700" />}
            label="LinkedIn"
            link="https://linkedin.com/in/your_username"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ContactItem({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition transform hover:scale-[1.03] flex flex-col items-center space-y-2"
    >
      {icon}
      <span className="text-lg font-medium text-gray-800">{label}</span>
    </a>
  )
}
