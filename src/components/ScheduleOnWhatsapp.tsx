import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaWhatsapp } from 'react-icons/fa'

export function ScheduleOnWhatsapp() {
  const controls = useAnimation()

  const [ref, inView] = useInView({
    triggerOnce: true, // Só aciona a animação uma vez
  })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -150 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className=" flex h-full w-full flex-col items-center gap-8 px-4"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-dancing text-3xl text-white lg:text-5xl">
          Agende nossos Serviços pelo Whatsapp
        </h1>
        <span className="font-dancing text-xl underline decoration-1 underline-offset-2 lg:text-2xl">
          Veja datas e horários disponivéis para nossos serviços
        </span>
      </div>

      <a
        href="https://wa.me/5519983185173/"
        target="_blank"
        rel="noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 p-1  transition hover:scale-105 hover:opacity-80 lg:h-20 lg:w-20"
      >
        <FaWhatsapp className=" h-4/5 w-4/5 text-white" />
      </a>
    </motion.div>
  )
}
