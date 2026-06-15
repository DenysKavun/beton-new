export default function ProektuyuZarazPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-24 pb-12">

      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Проєктую зараз
        </h1>

        <p className="text-lg text-zinc-600 max-w-3xl">
          Поточні проєкти, розрахунки та робочі фрагменти проєктування.
          Частина інформації може бути обмежена відповідно до вимог замовників.
        </p>
      </section>

      {/* ПРОЕКТ №1 */}

      <section className="mb-24">

        <div className="mb-4">
          <span className="text-sm text-zinc-500">
            Травень 2026
          </span>
        </div>

        <h2 className="text-3xl font-semibold mb-2">
          Логістичний комплекс
        </h2>

        <p className="text-zinc-600 mb-8">
          КМ • Київська область • у роботі
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <img
            src="/current/project1-1.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

          <img
            src="/current/project1-2.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

          <img
            src="/current/project1-3.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

        </div>

      </section>

      {/* ПРОЕКТ №2 */}

      <section className="mb-24">

        <div className="mb-4">
          <span className="text-sm text-zinc-500">
            Травень 2026
          </span>
        </div>

        <h2 className="text-3xl font-semibold mb-2">
          Приватне укриття
        </h2>

        <p className="text-zinc-600 mb-8">
          КЖ • Бориспіль • у роботі
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <img
            src="/current/project2-1.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

          <img
            src="/current/project2-2.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

          <img
            src="/current/project2-3.webp"
            alt=""
            className="rounded-2xl border border-zinc-200"
          />

        </div>

      </section>

    </main>
  )
}
