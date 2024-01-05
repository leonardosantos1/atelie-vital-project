
interface CardProps {
  title: string
  text: string
  imgBraid:string
}

export function Card({ title, text, imgBraid }: CardProps) {
  return (
    <div className="m-2 flex flex-col content-between items-center rounded-lg bg-bege-400 p-4 sm:h-[583px] lg:my-8 md:w-64 md:h-[524px] lg:w-64 lg:h-120 lg:p-4 my-auto gap-4">
      <h1 className="w-full font-ephesis text-5xl md:text-4xl font-semibold text-white">
        {title}
      </h1>
      <img src={imgBraid} className="sm:w-52 md:h-52 md:w-52  lg:w-60 lg:h-56 rounded-md object-cover"/>
      <span className="p-4 text-left font-playfair text-sm font-semibold text-white lg:text-justify">
        {text}
      </span>
      <button className=" mt-auto w-3/4 translate-x-1 rounded-md bg-bege-100 font-ephesis text-3xl font-semibold text-zinc-700 transition hover:scale-110">
        Agendar
      </button>
    </div>
  )
}
