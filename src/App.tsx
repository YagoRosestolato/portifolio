import profile from './assets/profile.jpeg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import logotipo from './assets/logotipo.svg'



export default function App(){
  return (
    <>
      <main className="px-10 sm:px-20 md:px-24 xl:px-44 2xl:px-64 ">
        <section className="py-60 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center">
          <img className='w-64 border-4 rounded-full lg:pr-0' src={profile}  />
          <div className="flex flex-col gap-5">
            <h2 className="text-6xl text-center lg:text-left">Yago</h2>
            <p className="text-xl">Desenvolvedor FrontEnd</p>
            <div>
              <ul className='flex justify-center lg:justify-start gap-7'>
                <li>
                  <a href="https://twitter.com/yagorosestolato">
                    <img className='w-7 h-7 hover:scale-110 ease-in-out duration-100' src={twitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/yagorosestolato/ " target="_blank">
                    <img className='w-7 h-7 hover:scale-110 ease-in-out duration-100' src={linkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yagorosestolato">
                    <img className='w-7 h-7 hover:scale-110 ease-in-out duration-100' src={github} />
                  </a>
                </li>
              </ul>
            </div>
          </div>  
        </section>
      </main>
    </>
  )
}