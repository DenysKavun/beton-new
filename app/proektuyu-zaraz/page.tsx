'use client'

import { useState, useEffect } from 'react'

// Структуровані дані проєктів
const PROJECTS = [
  {
    id: 7,
    date: 'Червень 2026',
    title: "Назва 7-го об'єкту",
    tags: 'КМ • Місто • у роботі',
    images: ['/current/project7-1.webp', '/current/project7-2.webp', '/current/project7-3.webp']
  },
  {
    id: 6,
    date: 'Червень 2026',
    title: "Назва 6-го об'єкту",
    tags: 'КЖ • Місто • у роботі',
    images: ['/current/project6-1.webp', '/current/project6-2.webp', '/current/project6-3.webp']
  },
  {
    id: 5,
    date: 'Травень 2026',
    title: "Назва 5-го об'єкту",
    tags: 'КР • Місто • у роботі',
    images: ['/current/project5-1.webp', '/current/project5-2.webp', '/current/project5-3.webp']
  },
  {
    id: 4,
    date: 'Травень 2026',
    title: "Назва 4-го об'єкту",
    tags: 'КМ • Місто • у роботі',
    images: ['/current/project4-1.webp', '/current/project4-2.webp', '/current/project4-3.webp']
  },
  {
    id: 3,
    date: 'Травень 2026',
    title: "Котедж",
    tags: 'КЖ • Умань • завершений',
    images: ['/current/project3-1.webp', '/current/project3-2.webp', '/current/project3-3.webp']
  },
  {
    id: 2,
    date: 'Травень 2026',
    title: 'Адміністративний будинок Верховної Ради',
    tags: 'КМ • Київ • завершений',
    images: ['/current/project2-1.webp', '/current/project2-2.webp', '/current/project2-3.webp']
  },
  {
    id: 1,
    date: 'Лютий 2026',
    title: 'Виробничий комплекс',
    tags: 'КМ • Київська область • завершений',
    images: ['/current/project1-1.webp', '/current/project1-2.webp', '/current/project1-3.webp']
  }
]

// Плоский масив усіх картинок для послідовного гортання
const ALL_IMAGES = PROJECTS.flatMap(p => p.images)

export default function ProektuyuZarazPage() {
  const [activeImgIndex, setActiveImgIndex] = useState<number | null>(null)

  // Функції навігації
  const closeGallery = () => setActiveImgIndex(null)
  
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (activeImgIndex !== null) {
      setActiveImgIndex((activeImgIndex + 1) % ALL_IMAGES.length)
    }
  }

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (activeImgIndex !== null) {
      setActiveImgIndex((activeImgIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length)
    }
  }

  // Керування клавіатурою (стрілки та Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImgIndex === null) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeGallery()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImgIndex])

  return (
    <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-24 pb-12 select-none">
      
      {/* Кнопка "Назад на головну" */}
      <div className="mb-8">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black transition no-underline"
        >
          ← На головну
        </a>
      </div>

      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Проєктую зараз
        </h1>
        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Поточні проєкти, розрахунки та робочі фрагменти проєктування.
          Частина інформації може бути обмежена відповідно до вимог замовників.
        </p>
      </section>

      {/* Рендеринг проєктів */}
      {PROJECTS.map((project) => (
        <section key={project.id} className="mb-24">
          <div className="mb-4">
            <span className="text-sm text-zinc-500">{project.date}</span>
          </div>
          <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
          <p className="text-zinc-600 mb-8">{project.tags}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.images.map((imgUrl) => {
              const globalIndex = ALL_IMAGES.indexOf(imgUrl)
              return (
                <div 
                  key={imgUrl}
                  onClick={() => setActiveImgIndex(globalIndex)}
                  className="cursor-zoom-in overflow-hidden rounded-2xl border border-zinc-200 aspect-[4/3] bg-zinc-50 group relative"
                >
                  <img 
                    src={imgUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300"
                  />
                </div>
              )
            })}
          </div>
        </section>
      ))}

      {/* ПОВНОЕКРАННИЙ ЛАЙТБОКС (МОДАЛКА) */}
      {activeImgIndex !== null && (
        <div 
          onClick={closeGallery}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
        >
          {/* Кнопка закрити */}
          <button 
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light p-2 transition"
          >
            ✕
          </button>

          {/* Стрілка вліво */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-6 text-white/50 hover:text-white text-4xl p-4 transition bg-black/20 hover:bg-black/40 rounded-full"
          >
            ‹
          </button>

          {/* Сама картинка */}
          <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center">
            <img 
              src={ALL_IMAGES[activeImgIndex]} 
              alt="Збільшене зображення" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} // щоб не закривалося при кліку на саму картинку
            />
          </div>

          {/* Стрілка вправо */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-6 text-white/50 hover:text-white text-4xl p-4 transition bg-black/20 hover:bg-black/40 rounded-full"
          >
            ›
          </button>

          {/* Лічильник знизу */}
          <div className="absolute bottom-6 text-white/60 text-sm font-medium">
            {activeImgIndex + 1} / {ALL_IMAGES.length}
          </div>
        </div>
      )}

    </main>
  )
}
