import Services from './components/Services'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-24 pb-12">

        {/* HERO */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
            Інженер-конструктор <br />
            будівельних конструкцій
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed mb-4">
            КМ • КЖ • КЗ • SCAD розрахунки • фундаменти • реконструкції • підсилення
          </p>

          <p className="text-base sm:text-lg text-zinc-500">
            18+ років практичного досвіду у проєктуванні та розрахунках металевих і залізобетонних конструкцій будь-якої складності.
          </p>
        </section>

        {/* BUTTONS */}
        <section className="flex flex-wrap gap-4 mb-20">
          <a
            href="https://t.me/D_nssssss"
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition no-underline text-zinc-900 font-medium"
          >
            Telegram
          </a>

          <a
            href="viber://chat?number=%2B380676059990"
            className="px-6 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition no-underline text-zinc-900 font-medium"
          >
            Viber
          </a>

          <a
            href="https://wa.me/380676059990"
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition no-underline text-zinc-900 font-medium"
          >
            WhatsApp
          </a>

          <a
            href="tel:+380676059990"
            className="px-6 py-4 rounded-2xl bg-black text-white hover:bg-zinc-800 transition no-underline font-semibold"
          >
            Обговорити проєкт
          </a>
        </section>

        <Services />

        {/* GRID INFO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Що виконую
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• Металеві航空 конструкції (каркаси, балки, ферми)</li>
              <li>• Залізобетонні конструкції (плити, перекриття)</li>
              <li>• SCAD розрахунки просторових систем</li>
              <li>• Фундаменти (плитні, стрічкові, пальові)</li>
              <li>• Підсилення конструкцій</li>
              <li>• Реконструкція будівель</li>
              <li>• Складні інженерно-геологічні умови</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Спеціалізація
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• Оптимізація конструкцій під бюджет</li>
              <li>• Зменшення матеріалоємності</li>
              <li>• Реальні умови будівництва</li>
              <li>• Складні нестандартні задачі</li>
              <li>• Мінімізація перевитрат</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Типи об’єктів
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• Житлові будинки</li>
              <li>• Промислові будівлі</li>
              <li>• Склади та логістика</li>
              <li>• Торгові центри</li>
              <li>• Котеджі</li>
              <li>• Укриття</li>
              <li>• Реконструкції</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Досвід та ПЗ
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• 18+ років практики</li>
              <li>• SCAD Office</li>
              <li>• AutoCAD</li>
              <li>• ArchiCAD</li>
              <li>• BIM / Revit</li>
              <li>• Робота без посередників</li>
              <li>• Operational оперативні правки</li>
            </ul>
          </div>
        </section>

        {/* BUNKER CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 text-white p-8 sm:p-12">
            {/* BACKGROUND IMAGE */}
            <img
              src="/projects/shelters/shelter11.webp"
              alt="Бомбосховище"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                Реальні реалізовані об’єкти
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
                Будівництво <br />
                Бомбосховищ та Укриттів
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Монолітні залізобетонні укриття для приватних будинків,
                котеджів та комерційних об’єктів.
                Реальні побудовані сховища в Україні.
              </p>

              <a
                href="/bomboshovyshcha"
                className="inline-flex items-center px-8 py-5 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition no-underline"
              >
                Детальніше →
              </a>
            </div>
          </div>
        </section>

        {/* YOUTUBE */}
        <section className="mt-24">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Відео проєктів та розрахунків
            </h2>
            <p className="text-zinc-500">
              Реальні інженерні задачі, проєктування та будівництво
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ejAzA3ADiUw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* БЛОК "ПРОЄКТУЮ ЗАРАЗ" (Додано сюди для ідеальної структури) */}
        <section className="mt-24">
          <div className="rounded-3xl border border-zinc-200 p-8 sm:p-12 bg-zinc-50/50">
            <div className="text-sm uppercase tracking-wider text-zinc-500 font-medium mb-3">
              Живий процес роботи
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-4">
              Проєктую зараз
            </h2>

            <p className="text-zinc-600 text-lg max-w-2xl mb-8 leading-relaxed">
              Поточні об’єкти в роботі: розрахунки в SCAD, монолітні фундаменти, 
              металеві каркаси, укриття та реконструкції будівель. Свіжі робочі фрагменти проєктування.
            </p>

            <a
              href="/proektuyu-zaraz"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-black text-white font-medium hover:bg-zinc-800 transition-colors no-underline"
            >
              Дивитися поточні проєкти 
              <span>→</span>
            </a>
          </div>
        </section>

        {/* GALLERY */}
        <Gallery />

        {/* SOCIALS */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-6">
            Соціальні мережі
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/beton.engineer?igsh=MTRrazF5bGNrMmZqNw=="
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition no-underline text-zinc-900 font-medium"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@beton3889?_r=1&_t=ZS-96FGPyMt0uS"
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition no-underline text-zinc-900 font-medium"
            >
              TikTok
            </a>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold mb-8">
            Реальні об’єкти
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200">
              <div className="text-4xl font-bold mb-2">18+</div>
              <p className="text-zinc-600">років практичного досвіду</p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-zinc-600">реалізованих об’єктів</p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200">
              <div className="text-4xl font-bold mb-2">SCAD</div>
              <p className="text-zinc-600">професійні інженерні розрахунки</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-400">
            © 2026 • Проєктування будівельних конструкцій | beton.monster
          </p>
        </footer>

      </main>
    </>
  )
}
