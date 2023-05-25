import calculadora from '../assets/calculadora.png'
import pokedex from '../assets/pokedex.jpeg'
import devlink from '../assets/devlink.jpeg'

export default function Projetos (){
  return (
    <>
      <div className="pb-36 ">
        <h1 className="text-center text-3xl font-mono mb-10">Projetos</h1>
        <ul className='grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-3 gap-x-1 gap-y-10 justify-items-center pt-10'>
          <li className='border bg-white max-w-[400px] border-black p-2 rounded-lg flex justify-center relative after:rounded-lg after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute after:bg-black hover:after:top-0 hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:translate-x-1 hover:translate-y-1 hover:after:bg-transparent'>
            <a href="">
              <div className='flex flex-col gap-3 p-4 text-center '>
                <h3 className='text-2xl'>Calculadora</h3>
                <img className='w-72 border rounded-lg' src={calculadora} alt="" />
                <p className='w-72 px-5'>Projeto desenvolvido em conjunto com a rocketseat a fim de testar os meus conhecimentos em HTML, CSS e JavaScript</p>
              </div>
            </a>
          </li>
          <li className='border bg-white max-w-[400px] border-black p-2 rounded-lg flex justify-center relative after:rounded-lg after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute after:bg-black hover:after:top-0 hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:translate-x-1 hover:translate-y-1 hover:after:bg-transparent'>
            <a href="">
              <div className='flex flex-col gap-3 p-4 text-center z-10'>
                <h3 className='text-2xl'>Calculadora</h3>
                <img className='w-72 border rounded-lg' src={pokedex} alt="" />
                <p className='w-72 px-5'>Esse foi desenvolvido para estudar consumo de API em JavaScript.</p>
              </div>
            </a>
          </li>
          <li className='border bg-white max-w-[400px] border-black p-2 rounded-lg flex justify-center relative after:rounded-lg after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute after:bg-black hover:after:top-0 hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:translate-x-1 hover:translate-y-1 hover:after:bg-transparent'>
            <a href="https://yagorosestolato.github.io/devlink/" target="_blank">
              <div className='flex flex-col gap-3 p-4 text-center z-10'>
                <h3 className='text-2xl'>DevLink</h3>
                <img className='w-72 border rounded-lg' src={devlink}  />
                <p className='w-72 px-5'></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}