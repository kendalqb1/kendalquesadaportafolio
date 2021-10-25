const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '/',
    title: 'KQ.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Kendal Quesada',
    role: 'FullStack Developer',
    description:
      'Soy una estudiante de la carrera Ingenieria en Sistemas, en la Universidad Nacional de Costa Rica, soy una persona proactiva, me gusta aprender de nuevas tecnologias de desarrollo Web, a la vez soy una apasionado del desarrollo movil con flutter para plataformas Android y iOS.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/kendal-quesada/',
      github: 'https://github.com/kendalqb1',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Comapan',
      description:
        'Proyecto hecho para la panaderia Comapan, esto es un proyecto desarrollado para la Universidad',
      stack: ['HTML', 'CSS', 'JavaScript'],
      sourceCode: 'https://github.com/kendalqb1/comapan.github.io',
      livePreview: 'https://kendalqb1.github.io/comapan.github.io/',
    },
    {
      name: 'Gif App',
      description:
        'Aplicacion que utiliza la API de Giphy para la busqueda  y listado de GIFS, con el uso de Hooks',
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/kendalqb1/React-GifApp',
      livePreview: 'https://react-gif-app.vercel.app/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'React',
    'NodeJS',
    'Bootstrap',
    'Java',
    'C++',
    'Linux',
    'Python',
    'Flask',
    'MongoDB',
    'MySql',
    'Heroku',
    'API',
    'TailwindCSS'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'kendalqb1@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  