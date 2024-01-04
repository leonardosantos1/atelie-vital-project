interface CardProps {
  title: string
  text: string
}

export function Card({ title, text }: CardProps) {
  return (
    <div className="m-2 flex flex-col items-center rounded-lg bg-bege-400 p-4 lg:my-8 lg:w-64 lg:p-4">
      <h1 className="w-full font-ephesis text-5xl font-semibold text-white">
        {title}
      </h1>
      <span className="p-4 text-left font-playfair text-sm font-semibold text-white lg:text-justify">
        {text}
      </span>
      <button className=" mt-auto w-3/4 translate-x-1 rounded-md bg-bege-100 font-ephesis text-3xl font-semibold text-zinc-700 transition hover:scale-110">
        Agendar
      </button>
    </div>
  )
}
