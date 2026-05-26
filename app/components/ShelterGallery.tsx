'use client'

import { useEffect, useState } from 'react'

type Shelter = {
  src: string
  title: string
}

const shelters: Shelter[] = [
  {
    src: '/projects/shelters/shelter1.webp',
    title: 'Приватне укриття, Київ',
  },
  {
    src: '/projects/shelters/shelter2.webp',
    title: 'Монолітне бомбосховище',
  },
  {
    src: '/projects/shelters/shelter3.webp',
    title: 'Будівництво укриття',
  },
  {
    src: '/projects/shelters/shelter4.webp',
    title: 'Підземне сховище',
  },
  {
    src: '/projects/shelters/shelter5.webp',
    title: 'Бетонне укриття',
  },
  {
    src: '/projects/shelters/shelter6.webp',
    title: 'Монолітний залізобетон',
  },
]

export default function ShelterGallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const nextSlide = () => {
    if (selected === null) return
    setSelected((selected + 1) % shelters.length)
  }

  const prevSlide = () => {
    if (selected === null) return
    setSelected((selected - 1 + shelters.length) % shelters.length)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return

      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'Escape') setSelected(null)
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [selected])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {shelters.map((item, index) => (
          <div
            key={item.src}
            className="group cursor-pointer"
            onClick={() => setSelected(index)}
          >

            <div className="overflow-hidden rounded-2xl">

              <img
                src={item.src}
                alt={item.title}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            <p className="mt-3 text-zinc-700 font-medium">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected !== null && (

        <div
          className="
            fixed inset-0
            bg-black/95
            z-50
            flex items-center justify-center
          "
          onClick={() => setSelected(null)}
        >

          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              text-white text-5xl z-50
              hover:opacity-70 transition
            "
          >
            ←
          </button>

          {/* IMAGE */}
          <div
            className="relative max-w-6xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={shelters[selected].src}
              alt=""
              className="
                w-full
                max-h-[90vh]
                object-contain
                rounded-2xl
              "
            />

            <p className="
              text-center
              text-white
              text-lg
              mt-6
            ">
              {shelters[selected].title}
            </p>

          </div>

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              text-white text-5xl z-50
              hover:opacity-70 transition
            "
          >
            →
          </button>

        </div>
      )}
    </>
  )
}
