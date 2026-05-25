export default function Services() {
  const services = [
    {
      title: 'Проєкт фундаментів',
      image: '/services/project_fund.webp',
    },
    {
      title: 'Проєкт залізобетонних конструкцій (КЖ, КЗ)',
      image: '/services/project_concret.webp',
    },
    {
      title: 'Проєкт металевих конструкцій (КМ)',
      image: '/services/project_steel',
    },
    {
      title: 'Проєкт реконструкцій',
      image: '/services/project_reconstr.webp',
    },
    {
      title: 'Розрахунок конструкцій — економія коштів',
      image: '/services/project_calcul.webp',
    },
  ]

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-8">
        Проєктую:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service) => (
          <div
            key={service.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              cursor-pointer
              border border-zinc-200
              bg-black
            "
          >
            <img
              src={service.image}
              alt={service.title}
              className="
                h-72 w-full object-cover
                transition duration-500
                group-hover:scale-110
                group-hover:opacity-80
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80
                to-black/10
              "
            />

            <div
              className="
                absolute bottom-0 left-0
                p-6
              "
            >
              <h3
                className="
                  text-white
                  text-xl
                  font-semibold
                  leading-snug
                  transition
                  group-hover:text-zinc-200
                "
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
