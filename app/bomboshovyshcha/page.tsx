import type { Metadata } from 'next'
import ShelterGallery from '../components/ShelterGallery'
import Navbar from '../components/Navbar'

// Додаємо коректні SEO метадані для сторінки бомбосховищ
export const metadata: Metadata = {
  title: 'Проєктування та Будівництво Укриттів, Бомбосховищ | Beton Monster',
  description: 'Проєктування та будівництво приватних і комерційних укриттів під ключ. Монолітні підземні сховища, захисні приміщення, гідроізоляція. Понад 18 років досвіду.',
  openGraph: {
    title: 'Будівництво бомбосховищ та укриттів під ключ | Beton Monster',
    description: 'Монолітні залізобетонні укриття для котеджів, приватних будинків та комерційних об’єктів. Розрахунок конструкцій, реальний досвід.',
    url: 'https://www.beton.monster/bomboshovyshcha',
    siteName: 'Beton Monster',
    images: [
      {
        url: 'https://www.beton.monster/projects/shelters/shelter10.webp', // Використовуємо ваше головне фото як прев'ю в месенджерах
        width: 1200,
        height: 630,
        alt: 'Будівництво монолітного укриття',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function BombShelterPage() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-24 pb-20">

        {/* HERO SECTION (Поєднано і оптимізовано під один H1 для SEO) */}
        <section className="mb-16">
          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-sm font-medium">
            Монолітні залізобетонні укриття
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-zinc-900 mb-8">
            Проєктування та будівництво <br />
            укриттів і бомбосховищ
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mb-4">
            Проєктування та будівництво приватних і комерційних укриттів: 
            монолітні підземні сховища, захисні приміщення, бетонні конструкції під ключ.
          </p>

          <p className="text-lg text-zinc-500 max-w-3xl mb-4">
            Будівництво приватних підземних та наземних укриттів для котеджів, 
            приватних будинків та комерційних об’єктів у складних умовах щільної забудови.
          </p>

          <p className="text-zinc-400 text-sm italic">
            Реальний досвід будівництва укриттів у 2024–2025 роках. Тільки монолітний залізобетон та професійна гідроізоляція.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="mb-24">
          <img
            src="/projects/shelters/shelter10.webp"
            alt="Будівництво монолітного залізобетонного бомбосховища"
            className="w-full rounded-3xl shadow-2xl"
          />
        </section>

        {/* DETAILS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="p-8 rounded-3xl border border-zinc-200">
            <h2 className="text-2xl font-semibold mb-4">
              Що потрібно для початку
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• Розміри бажаного укриття</li>
              <li>• Кількість людей</li>
              <li>• Геологія та рівень ґрунтових вод</li>
              <li>• Відстань до існуючих будівель</li>
              <li>• Тіп конструкції та бюджет</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-zinc-200">
            <h2 className="text-2xl font-semibold mb-4">
              Що ми виконуємо
            </h2>
            <ul className="space-y-3 text-zinc-700 leading-relaxed">
              <li>• Проєктування укриття</li>
              <li>• Розрахунок конструкцій (КМ, КЖ)</li>
              <li>• Монолітні бетонні роботи</li>
              <li>• Гідроізоляція</li>
              <li>• Підсилення та захист</li>
            </ul>
          </div>
        </section>

        {/* IMPORTANT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              З чого починається будівництво
            </h2>
            <ul className="space-y-5 text-zinc-700 text-lg leading-relaxed">
              <li>• Рівень ґрунтових вод</li>
              <li>• Близькість існуючих будівель</li>
              <li>• Щільність забудови ділянки</li>
              <li>• Можливість заїзду техніки</li>
              <li>• Геологічні умови</li>
              <li>• Підсилення існуючих конструкцій поруч</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              Що ми будуємо
            </h2>
            <ul className="space-y-5 text-zinc-700 text-lg leading-relaxed">
              <li>• Приватні бомбосховища</li>
              <li>• Підземні укриття</li>
              <li>• Монолітні бетонні сховища</li>
              <li>• Укриття для котеджів</li>
              <li>• Захищені технічні приміщення</li>
              <li>• Реконструкція існуючих підвалів</li>
            </ul>
          </div>
        </section>

        {/* WHY MONOLITH */}
        <section className="mb-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              Чому саме монолітний залізобетон
            </h2>
            <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
              <p>
                Бомбосховища та укриття повинні бути виключно монолітними залізобетонними конструкціями.
              </p>
              <p>
                Ми не використовуємо ФБС-блоки або збірні плити, які можуть втратити стійкість та герметичність при динамічних чи сейсмічних навантаженнях.
              </p>
              <p>
                У роботі використовується подвійне та потрійне армування, спеціальний гідротехнічний бетон та посилені перекриття товщиною від 500 мм.
              </p>
              <p>
                Кожне укриття проектується з урахуванням систем примусової вентиляції, дренажу, багатошарової гідроізоляції та повної автономності.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Реальні об’єкти
          </h2>
          <ShelterGallery />
        </section>

        {/* PRICE */}
        <section className="mb-24">
          <div className="p-10 rounded-3xl bg-zinc-100">
            <h2 className="text-3xl font-bold mb-6">
              Вартість будівництва
            </h2>
            <p className="text-xl text-zinc-700 leading-relaxed mb-4">
              Підсумкова вартість залежить від результатів геології, рівня ґрунтових вод, складності розробки ґрунту в умовах ділянки та загальних розмірів сховища.
            </p>
            <p className="text-2xl font-semibold text-zinc-900">
              Базове захисне укриття 4×3 м — від 7000$
            </p>
          </div>
        </section>

        {/* VIDEO */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">
            Відео з будівельного майданчика
          </h2>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fZWGIEwo92E"
                title="Відео будівництва бомбосховища - Beton Monster"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Чому замовники звертаються до нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200">
              <h3 className="font-semibold mb-3 text-lg">Реальний досвід</h3>
              <p className="text-zinc-600">
                Побудовані та успішно здані приватні укриття та бомбосховища протягом 2024–2025 років.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200">
              <h3 className="font-semibold mb-3 text-lg">Інженерний підхід</h3>
              <p className="text-zinc-600">
                Професійний розрахунок конструкцій у SCAD, врахування реальних навантажень та точна оптимізація бюджету без втрати міцності.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200">
              <h3 className="font-semibold mb-3 text-lg">Повний цикл</h3>
              <p className="text-zinc-600">
                Супроводжуємо проєкт від перших креслень та розрахунків армування до повного контролю монолітних робіт на об'єкті.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 p-10 rounded-3xl bg-black text-white">
          <h2 className="text-3xl font-bold mb-4">
            Потрібне надійне укриття або бомбосховище?
          </h2>
          <p className="text-zinc-300 mb-8 max-w-2xl">
            Надішліть план ділянки або короткий опис задачі у месенджер — 
            допоможемо проаналізувати умови, оцінити технічну можливість будівництва та розрахувати орієнтовний кошторис.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/D_nssssss"
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Обговорити в Telegram
            </a>
            <a
              href="tel:+380676059990"
              className="px-6 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-colors"
            >
              Зателефонувати
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
