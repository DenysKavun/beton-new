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
   { src: '/projects/shelters/shelter11.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Бомбосховище №5, Львів' },
  { src: '/projects/shelters/shelter12.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Бомбосховище №6, Дніпро' },
  { src: '/projects/construction/project1.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Проект монолітної конструкції, Київ' },
  { src: '/projects/shelters/shelter10.webp', alt: 'Бомбосховище 3', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №4, Бориспіль' },
  { src: '/projects/construction/project3.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Проект монолітної конструкції, Київ' },
  { src: '/projects/shelters/shelter1.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/shelters/shelter2.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/construction/project6.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Проект монолітної конструкції, Київ' },
  { src: '/projects/shelters/shelter3.webp', alt: 'Бомбосховище 1', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №1, Київ' },
  { src: '/projects/shelters/shelter4.webp', alt: 'Бомбосховище 2', category: 'Укриття та Бомбосховища', title: 'Бомбосховище №2, Бориспіль' },
  { src: '/projects/construction/project5.webp', alt: 'Будівництво 1', category: 'Будівництво', title: 'Проект монолітної конструкції, Київ' },
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
  <section className="mt-24">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Наші проєкти
      </h2>

      <div className="text-sm text-zinc-400">
        {filteredProjects.length} фото
      </div>
    </div>

    {/* FILTERS */}
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setFilter(c)}
          className={`px-5 py-2.5 rounded-full border text-sm sm:text-base transition-all duration-200 ${
            filter === c
              ? 'bg-black text-white border-black'
              : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
          }`}
        >
          {c}
        </button>
      ))}
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProjects.map((p) => (
        <div
          key={p.src}
          className="group cursor-pointer"
          onClick={() => setSelected(p)}
        >
          <div className="overflow-hidden rounded-2xl bg-zinc-100">
            <img
              src={p.src}
              alt={p.alt}
              className="
                w-full
                h-[260px]
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div className="mt-3">
            <p className="text-sm text-zinc-400 mb-1">
              {p.category}
            </p>

            <p className="text-base font-medium text-zinc-800">
              {p.title}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* FULLSCREEN MODAL */}
    {selected && (
      <div
        className="
          fixed inset-0 z-[999]
          bg-black/90
          backdrop-blur-sm
          flex items-center justify-center
          p-4
          animate-in fade-in duration-300
        "
        onClick={() => setSelected(null)}
      >
        {/* CLOSE BUTTON */}
        <button
          className="
            absolute top-5 right-5
            text-white text-4xl
            leading-none
            hover:opacity-70
            transition
          "
        >
          ×
        </button>

        {/* IMAGE */}
        <div
          className="relative max-w-7xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="
              w-full
              max-h-[90vh]
              object-contain
              rounded-2xl
              shadow-2xl
            "
          />

          {/* INFO */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              bg-gradient-to-t from-black/80 to-transparent
              p-6 rounded-b-2xl
            "
          >
            <p className="text-zinc-300 text-sm mb-1">
              {selected.category}
            </p>

            <h3 className="text-white text-xl font-semibold">
              {selected.title}
            </h3>
          </div>
        </div>
      </div>
    )}
  </section>
)
}
