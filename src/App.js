import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
// Importamos el componente Header
import Header from './Componentes/Header/header';
// Importamos el componente Formulario
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo/Equipo.js';
import Footer from './Componentes/Footer/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/74875249?v=4",
    nombre: "Damaris D.",
    puesto: "Instructora",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/30696989?v=4",
    nombre: "Anna Albirena",
    puesto: "Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/150735241?v=4",
    nombre: "Karem Aranda",
    puesto: "Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Ingeniería en Ciencias y Sistemas",
    foto: "https://github.com/Allan-Cardona-Usac.png",
    nombre: "Allán Cardona",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://avatars.githubusercontent.com/u/105094390?v=4",
    nombre: "Ayda Yineth Montoya Henao",
    puesto: "Estudiante de Desarrollo de Software e Ingeniería.",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://avatars.githubusercontent.com/u/2281088?v=4",
    nombre: "Sarah Drasner",
    puesto: "Instructora",
  },

  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://avatars.githubusercontent.com/u/62813278?v=4",
    nombre: "Dulce",
    puesto: "Reclutador de TI",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Ingeniería en Ciencias y Sistemas",
    foto: "https://avatars.githubusercontent.com/u/129325522?v=4",
    nombre: "Diana Fernández",
    puesto: "Insturctora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto: "https://avatars.githubusercontent.com/u/17043402?v=4",
    nombre: "Brais Moure",
    puesto: "Insturctor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto: "https://avatars.githubusercontent.com/u/1561955?v=4",
    nombre: "Miguel Ángel Durán",
    puesto: "Insturctor",
    fav: false
  }, {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://avatars.githubusercontent.com/u/55170175?v=4",
    nombre: "Majo Ledesma",
    puesto: "Python Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://avatars.githubusercontent.com/u/173979614?v=4",
    nombre: "Leonardo Rodriguez Loor",
    puesto: "Python Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://avatars.githubusercontent.com/u/123605007?v=4",
    nombre: "Keilin Escobar",
    puesto: "Android Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://avatars.githubusercontent.com/u/155651264?v=4",
    nombre: "Diego Reyes",
    puesto: "Android Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://avatars.githubusercontent.com/u/109234443?v=4",
    nombre: "Nicolas Rame",
    puesto: "Android Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://avatars.githubusercontent.com/u/79044804?v=4",
    nombre: "Myrella Almeida",
    puesto: "Android Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://avatars.githubusercontent.com/u/149925046?v=4",
    nombre: "Osvaldo Rodriguez Garcia",
    puesto: "Android Dev",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://avatars.githubusercontent.com/u/4975968?s=200&v=4",
    nombre: "Alura Latam",
    puesto: "Cursos de tecnología",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: " https://avatars.githubusercontent.com/u/104774103?s=200&v=4",
    nombre: "Platzi",
    puesto: "Cursos de tecnología",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: " https://avatars.githubusercontent.com/u/4430336?s=200&v=4",
    nombre: "Oracle",
    puesto: "Cursos de tecnología",
    fav: false

  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://avatars.githubusercontent.com/u/1376999?s=200&v=4",
    nombre: "Platzi",
    puesto: "Cursos de tecnología",
    fav: false
  }
    ,
  {
    id: uuid(),
    equipo: "Mi amor",
    foto: "https://avatars.githubusercontent.com/u/1376999?s=200&v=4",
    nombre: "Delmy Yessenia",
    puesto: "Ingeniera Industrial",
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Ingeniería en Ciencias y Sistemas",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;