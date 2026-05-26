import ShelterGallery from '../components/ShelterGallery'
import Navbar from '../components/Navbar'

export default function BombShelterPage() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-24 pb-20">

        {/* HERO */}
        <section className="mb-20">

          <div className="mb-6 inline-flex px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-sm font-medium">
            Монолітні залізобетонні укриття
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight text-zinc-900 mb-8">
            Бомбосховища <br />
            та Укриття
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mb-6">
            Будівництво приватних підземних та наземних укриттів
            для котеджів, приватних будинків та комерційних об’єктів.
          </p>

          <p className="text-lg text-zinc-500 max-w-3xl">
            Реальні реалізовані об’єкти. Монолітний залізобетон.
            Гідроізоляція. Робота в складних умовах щільної забудови.
          </p>

        </section>

        {/* HERO IMAGE */}
        <section className="mb-24">

          <img
            src="/projects/shelters/shelter10.webp"
            alt="Бомбосховище"
            className="w-full rounded-3xl shadow-2xl"
          />

        </section>

        {/* IMPORTANT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

          <div>
            <h2 className="text-3xl font-bold mb-8">
              З чого починається будівництво
            </h2>

            <ul className="space-y-5 text-zinc-700 text-lg leading-relaxed">

              <li>
                • Рівень ґрунтових вод
              </li>

              <li>
                • Близькість існуючих будівель
              </li>

              <li>
                • Щільність забудови ділянки
              </li>

              <li>
                • Можливість заїзду техніки
              </li>

              <li>
                • Геологічні умови
              </li>

              <li>
                • Підсилення існуючих конструкцій поруч
              </li>

            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              Що ми будуємо
            </h2>

            <ul className="space-y-5 text-zinc-700 text-lg leading-relaxed">

              <li>
                • Приватні бомбосховища
              </li>

              <li>
                • Підземні укриття
              </li>

              <li>
                • Монолітні бетонні сховища
              </li>

              <li>
                • Укриття для котеджів
              </li>

              <li>
                • Захищені технічні приміщення
              </li>

              <li>
                • Реконструкція існуючих підвалів
              </li>

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
                Бомбосховища та укриття повинні бути
                монолітними залізобетонними конструкціями.
              </p>

              <p>
                Ми не використовуємо ФБС-блоки або збірні плити,
                які можуть втратити стійкість при динамічних навантаженнях.
              </p>

              <p>
                Використовується потрійне армування,
                гідробетон та посилені перекриття
                товщиною від 500 мм.
              </p>

              <p>
                Укриття проектуються з урахуванням вентиляції,
                гідроізоляції, водовідведення та автономності.
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
              Вартість
            </h2>

            <p className="text-xl text-zinc-700 leading-relaxed mb-4">
              Вартість залежить від геології,
              рівня ґрунтових вод,
              складності ділянки
              та розмірів укриття.
            </p>

            <p className="text-2xl font-semibold text-zinc-900">
              Укриття 4×3 м — від 7000$
            </p>

          </div>

        </section>

        {/* VIDEO */}
        <section className="mb-24">

          <h2 className="text-3xl font-bold mb-8">
            Відео будівництва
          </h2>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fZWGIEwo92E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Потрібна консультація?
          </h2>

          <p className="text-zinc-600 text-lg mb-10 max-w-2xl mx-auto">
            Надішліть фото ділянки або геологію —
            допоможемо оцінити можливість будівництва укриття.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://t.me/D_nssssss"
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-5 rounded-2xl bg-black text-white hover:bg-zinc-800 transition text-lg font-semibold"
            >
              Telegram
            </a>

            <a
              href="tel:+380676059990"
              className="px-8 py-5 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition text-lg font-semibold"
            >
              Зателефонувати
            </a>

          </div>

        </section>

      </main>
    </>
  )
}
