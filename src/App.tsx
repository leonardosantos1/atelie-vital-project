// import { Carousel } from './components/Carousel'
import { About } from './components/About'
import { Card } from './components/Card'
import { PostInstagram } from './components/PostInsgram'
import imageInstagram1 from '../public/image-instagram-1.jpeg'
import imageInstagram3 from '../public/image-instagram-2.jpeg'
import imageInstagram2 from '../public/trabalho2.jpeg'
import imageInstagram4 from '../public/trabalho4.jpeg'
import imageInstagram5 from '../public/trabalho5.jpeg'
import imageInstagram6 from '../public/trabalho6.jpeg'
import nagoBraid from "../public/nago-braids.jpeg"
import fulaniBraid from "../public/fulani-braids.jpeg"
import goddnessBraid from "../public/goddness-braid.jpeg"
import entrelaceBraid from "../public/entrelace-braids.jpeg"
import gypsyBraid from "../public/gypsy-braid.jpeg"
import crochetBraid from "../public/crochet-braid.jpeg"
import butterflyBraid from "../public/butterfly-braids.jpeg"
import boxBraid from "../public/box-braid.jpeg"
import { WhatsappButton } from './components/WhatsappButton'
import { Footer } from './components/Footer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ScheduleOnWhatsapp } from './components/ScheduleOnWhatsapp'
import { SimpleCarousel } from './components/SimpleCarousel'

export function App() {
  const controls = useAnimation()

  const [ref, inView] = useInView({
    triggerOnce: true, // Só aciona a animação uma vez
  })

  // const braids = [
  //   {
  //     title: 'Nago',
  //     text: 'São aquelas feitas desde a raiz, bem presinhas no couro cabeludo',
  //   },
  //   {
  //     title: 'Fulani braids',
  //     text: 'Possui uma ou duas tranças nagô de cada lado da orelha com as pontas da trança soltas para frente; Também pode ter uma trança enrolada ao redor da cabeça',
  //   },
  //   {
  //     title: 'Box braids',
  //     text: 'As tranças box braids são tranças que misturam fios sintéticos com o cabelo natural para proporcionar o visual trançado para mulheres e homens',
  //   },
  //   {
  //     title: 'Goddess braids',
  //     text: 'Os fios do cabelo são trançados como box braids e ficam ainda mais incríveis com uma extensão de cabelo encaracolada',
  //   },
  //   {
  //     title: 'Gypsy braids',
  //     text: 'As gypsy braids são tranças de cabelo finas que iniciam na raiz e terminam com as pontas soltas texurizadas',
  //   },
  //   {
  //     title: 'Crochet braids',
  //     text: 'A técnica recebe esse nome porque, para colocar o aplique, o profissional usa uma agulha grossa para fazer um ponto similar ao do crochê',
  //   },
  //   {
  //     title: 'Entrelace',
  //     text: 'O cabelo é trançado em estilo nagô ou raiz, e a extensão é presa e costurada nas tranças',
  //   },
  //   {
  //     title: 'Butterfly',
  //     text: 'São criadas ao dividir o cabelo em seções e trançá-lo firmemente, formando um padrão que se assemelha às asas de uma borboleta',
  //   },
  // ]

  const slides = [
    imageInstagram1,
    imageInstagram2,
    imageInstagram3,
    imageInstagram4,
    imageInstagram5,
    imageInstagram6,
  ]

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen pt-20">
      {/* <Header /> */}
      <main className="flex  h-full w-full flex-col items-center bg-bege-50">
        <div className="flex w-full flex-col items-center bg-white">
          <div className="flex items-center mx-auto">
          <h1 className="flex mt-4 whitespace-nowrap w-full rounded-lg bg-bege-200 px-4 font-playfair text-lg text-zinc-700 underline decoration-1 underline-offset-2 md:text-2xl lg:text-3xl">
            Alguns dos meus trabalhos recentes!
          </h1>
          </div>
          
          {/* <Carousel slides={[...slides]} /> */}
          <SimpleCarousel slides={[...slides]} />
        </div>
        <About />
        <div className="mt-12 flex h-full w-full flex-col items-center bg-gradient-to-b from-bege-200 py-12">
          <h1 className="mb-4 border-b border-bege-400 font-dancing text-4xl font-semibold text-white lg:border-none lg:text-6xl">
            <span className="hidden text-zinc-700 lg:inline">--------- </span>{' '}
            Serviços de Tranças
            <span className="hidden text-zinc-700 lg:inline"> ---------</span>
          </h1>
          <div ref={ref}>
            <motion.div
              className="flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-2 sm:py-2 md:grid md:grid-cols-3 md:gap-4 md:py-4 lg:grid lg:grid-cols-4 lg:gap-8 lg:py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1.2 }}
            >
              <Card
                title="Nago"
                text="São aquelas feitas desde a raiz, bem presinhas no couro cabeludo"
                imgBraid={nagoBraid}
              />
              <Card
                title="Fulani braids"
                text="Possui uma ou duas tranças nagô de cada lado da orelha com as pontas da trança soltas para frente; Também pode ter uma trança enrolada ao redor da cabeça"
                imgBraid={fulaniBraid}

              />
              <Card
                title="Box braids"
                text="As tranças box braids são tranças que misturam fios sintéticos com o cabelo natural para proporcionar o visual trançado para mulheres e homens"
                imgBraid={boxBraid}

              />
              <Card
                title="Goddess braids"
                text="Os fios do cabelo são trançados como box braids e ficam ainda mais incríveis com uma extensão de cabelo encaracolada"
                imgBraid={goddnessBraid}

              />
              <Card
                title="Gypsy braids"
                text="As gypsy braids são tranças de cabelo finas que iniciam na raiz e terminam com as pontas soltas texurizadas"
                imgBraid={gypsyBraid}

              />
              <Card
                title="Crochet braids"
                text="A técnica recebe esse nome porque, para colocar o aplique, o profissional usa uma agulha grossa para fazer um ponto similar ao do crochê"
                imgBraid={crochetBraid}

              />
              <Card
                title="Entrelace"
                text="O cabelo é trançado em estilo nagô ou raiz, e a extensão é presa e costurada nas tranças"
                imgBraid={entrelaceBraid}

              />
              <Card
                title="Butterfly"
                text="São criadas ao dividir o cabelo em seções e trançá-lo firmemente, formando um padrão que se assemelha às asas de uma borboleta"
                imgBraid={butterflyBraid}

              />
            </motion.div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center gap-8 bg-gradient-to-b from-bege-200 to-bege-400 py-12">
          <ScheduleOnWhatsapp />
        </div>

        <div className="mb-8 flex w-full flex-col items-start py-12 lg:max-w-[1180px]">
          <div className="mx-2 my-8 flex flex-col">
            <h1 className="text-left font-playfair text-2xl text-zinc-900">
              Instagram do Ateliê Julia Vital
            </h1>
            <span className="bg-bege-200 font-dancing text-lg text-zinc-900 underline decoration-1 underline-offset-2">
              Acompanhe as últimas postagens do nosso Instagram!
            </span>
          </div>

          <PostInstagram />
        </div>
        <WhatsappButton />
        <Footer />
      </main>
    </div>
  )
}
