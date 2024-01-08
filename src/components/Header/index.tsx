// import logo from '../../../public/logo-xulia-salao.png'
// import logoBgWhite from '../../../public/logo-bg-white.png'
import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  return (
    <header className="fixed z-10 w-full bg-white shadow-md">
      <nav className="mx-auto flex w-full justify-center h-20">
        <div className="flex items-start justify-center md:mr-12 lg:mr-12">
          <h1 className="my-auto font-ephesis text-3xl text-zinc-700 md:text-4xl lg:text-5xl">
            Ateliê Julia Vital
          </h1>
        </div>
        {/* <div className=" my-auto hidden font-playfair font-semibold text-zinc-900 md:inline lg:inline">
          <button className="p-4">Home</button>
          <button className="p-4">Serviços</button>
          <button className="p-4">Agenda</button>
          <button className="p-4">Contato</button>
          <button className="p-4">Sobre</button>
        </div> */}
        <div className="my-auto">
          <a
            href="https://www.instagram.com/xxulia.xxu/"
            target="_blank"
            rel="noreferrer"
            className="my-2 ml-8 flex h-12 w-12 items-center justify-center rounded-full transition hover:scale-105 hover:opacity-80"
          >
            <Instagram className="h-3/5 w-3/5 text-zinc-700 " />
          </a>
        </div>
        <div className="my-auto">
          <a
            href={`https://wa.me/5519999098377/`}
            target="_blank"
            rel="noreferrer"
            className=" my-2 ml-8 flex h-12 w-12 items-center  justify-center rounded-full transition hover:scale-105 hover:opacity-80"
          >
            <FaWhatsapp className=" h-3/5 w-3/5 text-zinc-700" />
          </a>
        </div>
      </nav>
    </header>
  )
}
