// import { useContext } from 'react'
// import Context from '../context/context'

// export default function Dropdown() {
//   const ctx = useContext(Context)

//   const handleChange = (e) => {
//     const lang = e.target.value
//     ctx.changelang(lang)
//     // i18n.changeLanguage(lang) — if using next-i18next fully
//   }

//   return (
//     <select
//       value={ctx.lang}
//       onChange={handleChange}
//       className="text-black px-2 py-1 rounded bg-white"
//     >
//       <option value="en">English</option>
//       <option value="hi">Hindi</option>
//       <option value="mr">Marathi</option>
//     </select>
//   )
// }