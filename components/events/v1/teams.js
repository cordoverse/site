const Index = () => {
  const teams = [
    {
      title: 'Potenciamos Proyectos',
      description: 'Vamos a mostrarte como funcionan algunos proyectos cryptos en la provincia',
      section: 'Expasión',
    },
    {
      title: 'Compartimos Conocimiento',
      description: 'Entre todos aprendemos!',
      section: 'Sinergia',
    },
    {
      title: 'Construimos la DAO juntos',
      description: 'Entre todos aprendemos!',
      section: 'Gobernanza',    
    }
  ]
  return (
    <section class="flex h-full w-screen flex-col items-center justify-center bg-[#260E30]">
      <h2 class="text-left text-5xl font-bold text-[#FEA7DD] mb-10">Teams</h2>
      <div class="flex flex-row justify-around">
      {teams.map(team => (
        <div class="h-48 p-4 w-full m-2 rounded-lg border-2 border-[#EC6171]">
          <h3 class="text-slate-50 text-bold text-3xl">{team.title}</h3>
          <p class="text-slate-200 text-lg">{team.description}</p>
        </div>
      ))
      }
      </div>
    </section>
  )
}

export default Index
