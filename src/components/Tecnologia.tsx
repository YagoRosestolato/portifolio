import react_skills from '../assets/skill-icons_react-dark.svg'
import js_skills from '../assets/skill-icons_javascript.svg'
import tw_skills from '../assets/skill-icons_tailwindcss-dark.svg'
import ts_skills from '../assets/skill-icons_typescript.svg'
import css_skills from '../assets/skill-icons_css.svg'
import html_skills from '../assets/skill-icons_html.svg'


export default function Tecnologia (){
  return (
    <>
      <div className='pb-36 '>
        <p className='text-center text-3xl mb-10 font-mono'>Skills</p>    
        <ul className='grid grid-cols-1 lg:grid-cols-2 2xl:flex space-x-1  gap-y-6 justify-center justify-items-center'>
          
          <li><img className='w-12' src={react_skills}/></li>
          <li><img className='w-12' src={js_skills}/></li>
          <li><img className='w-12' src={tw_skills}/></li>
          <li><img className='w-12' src={ts_skills}/></li>
          <li><img className='w-12' src={css_skills}/></li>
          <li><img className='w-12' src={html_skills}/></li>
        </ul>
      </div>

    </>
  )
}