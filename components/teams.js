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
    <section class="flex h-screen max-w-full flex-col items-center justify-center bg-[#260E30]">
      {teams.map(team => (
        <div>
          <h3>{team.title}</h3>
          <p>{team.description}</p>
        </div>
      ))
      }
    </section>
  )
}

export default Index
