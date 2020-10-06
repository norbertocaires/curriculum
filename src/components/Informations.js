import logoUnB from '../images/logo-unb.svg';
import ministerioDasCidades from '../images/ministerio_das_cidades.png';
import scytl from '../images/scytl.png';
import snews from '../images/snews.png';
import emgea from '../images/emgea.png';
import pdf from '../pdfs/Norberto.pdf';

const Information = {
  name: "Norbeto Caires",
  job: "Desenvolvedor",
  linkedinUrl: "https://www.linkedin.com/in/norbertocaires",
  curriculumUrl: pdf,
  maritalStatus: "Solteiro",
  nationality: "Brasileiro",
  birth: "10/1991",
  address: "Asa Sul - DF",
  mail: "beto_caires@hotmail.com",
  phone: "61981706062",
  graduation: "Licenciatura em Computação",
  university: "Universidade de Brasília - UnB",
  logoUniversity: logoUnB,
  graduationYear: 2019,
  experiences: [
    {
      job: "Desenvolvedor (Estágio)",
      activities: "Desenvolvimento de plataforma para gerenciamento de demanda interna utilizando programação em JAVA.",
      period: "SET/2014 - FEV/2015",
      company: "Ministério das Cidades",
      logo: ministerioDasCidades
    },
    {
      job: "Desenvolvedor (Estágio)",
      activities: "Desenvolvimento de plataforma web para eleições online para conselhos e organizações; Utilização de tecnologias C#, TypeScript, AngularJS, ASP.NET Web API, Entity Framework,Microsoft Azure, Microsoft SQL Server database, entre outras.",
      period: "MAR/2015 - JUL/2016",
      company: "Scytl",
      logo: scytl
    },
    {
      job: "Analista de Desenvolvimento",
      activities: "Desenvolvimento de plataforma web para eleições online para conselhos e organizações; Utilização de tecnologias C#, TypeScript, JavaScript, AngularJS, ASP.NET Web API, Entity Framework, Microsoft Azure, Microsoft SQL Server database, entre outras; Aplicação de testes unitários com NUnit; Metodologia ágeis: Scrum, Daily Meetings e planejamentos de Sprints.",
      period: "AGO/2016 - OUT/2018",
      company: "Scytl",
      logo: scytl
    },
    {
      job: "Analista de Desenvolvimento",
      activities: "Desenvolvimento de plataforma para gerenciamento de emissoras em seus meios de comunicação: televisão, rádio e web; Utilização de tecnologias React, MongoDB, JavaScript, TypeScript, Docker, entre outras.",
      period: "NOV/2018 - DEZ/2019",
      company: "SNEWS",
      logo: snews
    },
    {
      job: "Analista de Desenvolvimento",
      activities: "Desenvolvimento de plataformas web para eleições e assembleias online para conselhos, organizações e condomínios; Utilização de tecnologias C#, TypeScript, JavaScript, AngularJS, ASP.NET Web API, Entity Framework, Microsoft Azure, Microsoft SQL Server database, entre outras; Aplicação de testes unitários com NUnit; Metodologia ágeis: Scrum, Daily Meetings e planejamentos de Sprints.",
      period: "JAN/2020 - AGO/2020",
      company: "Scytl",
      logo: scytl
    },
    {
      job: "Assessor",
      activities: "",
      period: "SET/2020 - Atual",
      company: "EMGEA",
      logo: emgea
    }
  ],
  skill: [
    "C#",
    "C",
    "Java",
    "JavaScript",
    "SQL",
    "React",
    "Python",
    "Azure",
    "HTML",
    "Scrum",
    "Linux",
    "ASP.NET",
    "MongoDB",
    "Latex",
    "AngularJS",
    "Unit Testing",
    "Postman",
    "Docker",
    "Inglês Técnico",
    "Git"
  ]
}

export default Information;