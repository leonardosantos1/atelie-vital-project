import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappButton() {
  return (
    <div className="relative z-10">
      <a href="https://wa.me/5519983185173/" target="_blank" rel="noreferrer">
        <button className="fixed bottom-4 right-4  flex items-center justify-center gap-2 rounded-full bg-green-600 p-4 font-playfair text-white transition hover:scale-110">
          <FaWhatsapp className="h-8 w-8 text-white" />

          <span className="hidden md:inline-block lg:inline-block">
            Entre em contato com a gente!
          </span>
        </button>
      </a>
    </div>
  )
}
