import { FaWhatsapp } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

export function Footer() {
  return (
    <div className="flex w-full bg-gradient-to-b from-bege-200 to-bege-400 p-4 lg:p-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-4 lg:flex-row lg:p-4">
        <div className="flex flex-col gap-1">
          <span className="w-48 bg-white text-center font-ephesis text-4xl text-zinc-700">
            Ateliê Vital
          </span>
          {/* <span className="font-playfair text-zinc-900">
            R. Flôr de Ipê, 376
          </span>
          <span className="font-playfair text-zinc-900">Pedreira - SP</span>
          <span className="font-playfair text-zinc-900">13920-000</span> */}
        </div>

        <div className=" hidden w-1/2 flex-col gap-4 md:flex lg:flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.036800476765!2d-46.897956430364076!3d-22.72276946169697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8de873cee4a81%3A0xb59df7a3084b973b!2sR.%20Fl%C3%B4r%20de%20Ip%C3%AA%2C%20376%2C%20Pedreira%20-%20SP%2C%2013920-000!5e0!3m2!1spt-BR!2sbr!4v1701948101038!5m2!1spt-BR!2sbr"
            width="450"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex w-1/2 flex-col gap-4 md:hidden lg:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.036800476765!2d-46.897956430364076!3d-22.72276946169697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8de873cee4a81%3A0xb59df7a3084b973b!2sR.%20Fl%C3%B4r%20de%20Ip%C3%AA%2C%20376%2C%20Pedreira%20-%20SP%2C%2013920-000!5e0!3m2!1spt-BR!2sbr!4v1701948101038!5m2!1spt-BR!2sbr"
            width="320"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mb-20 flex w-full flex-col gap-4 lg:items-center">
          <h1 className="w-48 bg-white px-2 font-ephesis text-3xl text-zinc-700">
            Atendimento:
          </h1>
          <div className="flex items-center justify-start gap-2">
            <BsTelephone className="h-4 w-4 text-zinc-700" />
            <span className="text-md font-garamond font-semibold text-zinc-700">
              (19) 98318712
            </span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaWhatsapp className="h-4 w-4 text-zinc-700" />
            <span className="text-md font-garamond font-semibold text-zinc-700">
              (19) 98318712
            </span>
          </div>
        </div>
        {/* <div className="flex w-full flex-col items-start gap-5 ">
          <h1 className="bg-white px-2 font-ephesis text-3xl font-semibold text-zinc-700">
            Rede Sociais:
          </h1>
          <div className="flex w-full gap-2">
            <div>
              <a
                href="https://www.instagram.com/xxulia.xxu/"
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full transition hover:scale-105 hover:opacity-80"
              >
                <Instagram className="h-3/5 w-3/5 text-zinc-700" />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/5519983185173/"
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full transition hover:scale-105 hover:opacity-80"
              >
                <FaWhatsapp className=" h-3/5 w-3/5 text-zinc-700" />
              </a>
            </div>
          </div>
          {/* <div>
            <span className="font-garamond">
              Desenvolvido por: leonardo.santos574@hotmail.com
            </span>
            <div className="mt-2">
              <a
                href="https://www.instagram.com/ileo1337/"
                target="_blank"
                rel="noreferrer"
                className=" rounded-full transition hover:scale-105 hover:opacity-80"
              >
                <Instagram className="h-8 w-8 text-zinc-700" />
              </a>
            </div>
          </div> */}
      </div>
    </div>
  )
}
