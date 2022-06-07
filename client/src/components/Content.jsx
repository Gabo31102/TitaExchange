import React from 'react'
import { LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'




export const Content = () => {

    const features = [
        {
        name: 'Sin cuotas escondidas',
        description:
            'El envío de dinero es gratuito, no necesita intermediarios ni molestos impuestos.',
        icon: ScaleIcon,
        },
        {
        name: 'Las transferencias son instantáneas',
        description:
            'Ya no tienes que esperar días, puedes conseguir tu dinero en segundos dentro de cualquier país del mundo',
        icon: LightningBoltIcon,
        },
    ]

  return (
    <div className="py-12 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Una mejor manera de enviar dinero
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Explora el mundo de las criptomonedas. Compra y vende criptomonedas fácilmente.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="drop-shadow-xl absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
