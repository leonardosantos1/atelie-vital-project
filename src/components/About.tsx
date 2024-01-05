import { Instagram } from 'lucide-react'
import XuliaImage from '../../public/xulia-image.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function About() {
  const controls = useAnimation()

  const [ref, inView] = useInView({
    triggerOnce: true, // Só aciona a animação uma vez
  })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 })
    }
  }, [controls, inView])

  return (
    <div className="flex w-full flex-col gap-12 p-12 md:h-4/6 md:w-4/6 lg:h-4/6 lg:w-4/6">
      <div className="flex w-full flex-col gap-8 lg:flex-row" ref={ref}>
        <div className="flex w-full flex-col justify-center gap-4 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={controls}
            transition={{ duration: 1.0 }}
          >
            <h1 className="my-4 font-playfair text-3xl text-zinc-800">
              Ateliê Julia Vital
            </h1>
            <p className="text-justify font-playfair text-lg font-bold text-zinc-900 md:hidden lg:hidden">
              Bem-vindo ao Ateliê Julia Vital, onde tranças ganham vida e o salão se
              transforma em um santuário de beleza
            </p>
            <p className="hidden text-justify font-playfair text-lg font-bold text-zinc-900 md:inline-block lg:inline-block">
              Bem-vindo ao Ateliê Julia Vital, onde tranças ganham vida e o salão se
              transforma em um santuário de beleza. Neste espaço encantador,
              nossos especialistas combinam habilidade e criatividade para criar
              tranças que contam histórias e oferecem serviços de salão que
              elevam a autoestima. Em um ambiente inspirador, comprometemo-nos
              com a qualidade, proporcionando uma experiência única onde a arte
              encontra a beleza. Descubra o encanto do Ateliê Julia Vital, onde cada
              visita é uma jornada de transformação e cuidado pessoal.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="lg:ml-auto"
        >
          <img src={XuliaImage} className="w-96 rounded-md " />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={controls}
        transition={{ duration: 1.2 }}
      >
        <a
          href="https://www.instagram.com/xxulia.xxu/"
          target="_blank"
          rel="noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition hover:scale-105 hover:opacity-80"
        >
          <Instagram className="h-3/5 w-3/5 text-zinc-700" />
        </a>
      </motion.div>
    </div>
  )
}
