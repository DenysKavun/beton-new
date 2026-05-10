'use client'

import { useState } from 'react'

type Project = {
  src: string
  alt: string
  category: string
  title: string
}

const projects: Project[] = [
  // Укриття та Бомбосховища
  { src: '/projects/shelters/shelter10.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №4, Бориспіль' },
  { src: '/projects/shelters/shelter1.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/shelters/shelter2.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/shelters/shelter3.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/shelters/shelter4.webp', alt: 'Бомбосховище 2', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №2, Бориспіль' },
  { src: '/projects/shelters/shelter5.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №3, Ірпінь' },
  { src: '/projects/shelters/shelter6.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №3, Ірпінь' },
  { src: '/projects/shelters/shelter7.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №3, Ірпінь' },
  { src: '/projects/shelters/shelter8.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №3, Ірпінь' },
  { src: '/projects/shelters/shelter9.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №3, Ірпінь' },
  

  // Реконструкції
  { src: '/projects/reconstructions/recon12.webp', alt: 'Реконструкція 1', category: 'Реконструкції', title: 'Реконструкція апарату ВР' },
  { src: '/projects/reconstructions/recon13.webp', alt: 'Реконструкція 2', category: 'Реконструкції', title: 'Реконструкція апарату ВР' },
  { src: '/projects/reconstructions/recon1.webp', alt: 'Реконструкція 3', category: 'Реконструкції', title: 'Реконструкція Нова Пошта' },
  { src: '/projects/reconstructions/recon2.webp', alt: 'Реконструкція 4', category: 'Реконструкції', title: 'Реконструкція будинку, Київ' },
  { src: '/projects/reconstructions/recon3.webp', alt: 'Реконструкція 4', category: 'Реконструкції', title: 'Реконструкція будинку, Київ' },
  { src: '/projects/reconstructions/recon4.webp', alt: 'Реконструкція 5', category: 'Реконструкції', title: 'Реконструкція санатроію, Пуща' },
  { src: '/projects/reconstructions/recon6.webp', alt: 'Реконструкція 6', category: 'Реконструкції', title: 'Реконструкція будинку, Гора' },
  { src: '/projects/reconstructions/recon7.webp', alt: 'Реконструкція 6', category: 'Реконструкції', title: 'Реконструкція будинку, Гора' },
  { src: '/projects/reconstructions/recon8.webp', alt: 'Реконструкція 6', category: 'Реконструкції', title: 'Реконструкція будинку, Гора' },
  { src: '/projects/reconstructions/recon9.webp', alt: 'Реконструкція 6', category: 'Реконструкції', title: 'Реконструкція будинку, Гора' },
  { src: '/projects/reconstructions/recon10.webp', alt: 'Реконструкція 3', category: 'Реконструкції', title: 'Реконструкція Нова Пошта' },
  { src: '/projects/reconstructions/recon11.webp', alt: 'Реконструкція 4', category: 'Реконструкції', title: 'Реконструкція будинку, Київ' },
  

  // Будівництво
  { src: '/projects/construction/construction1.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction2.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction3.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction4.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction5.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction6.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction7.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Монолітний каркас, Гора' },
  { src: '/projects/construction/construction8.webp', alt: 'Будівництво 2', category: 'Будівництво', title: 'Житловий будинок, Київ' },
  { src: '/projects/construction/construction9.webp', alt: 'Будівництво 2', category: 'Будівництво', title: 'Житловий будинок, Київ' },
  { src: '/projects/construction/construction10.webp', alt: 'Будівництво 3', category: 'Будівництво', title: 'Житловий будинок, Бориспіль' },
  { src: '/projects/construction/construction11.webp', alt: 'Будівництво 3', category: 'Будівництво', title: 'Житловий будинок, Бориспіль' },
  { src: '/projects/construction/construction12.webp', alt: 'Будівництво 3', category: 'Будівництво', title: 'Житловий будинок, Бориспіль' },
  
]

export default function Gallery() {
  const [filter, setFilter] = useState('Всі')
  const [selected, setSelected] = useState<Project | null>(null)

  const categories = ['Всі', 'Укриття та Бомбосховища', 'Реконструкції', 'Будівництво']

  const filteredProjects =
    filter === 'Всі'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8">Наші проєкти</h2>

      {/* Категории */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === c
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Галерея */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <div key={p.src} className="flex flex-col">
            <img
              src={p.src}
              alt={p.alt}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelected(p)}
            />
            <p className="mt-2 text-sm sm:text-base text-zinc-700 font-medium">
              {p.title}
            </p>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative">
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl font-medium">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
