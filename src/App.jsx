import {useState,useEffect} from "react"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header from "./components/Header"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState([])

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);
 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
  

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
        
      />

      <div className="mt-12 md:flex ">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}

        />
      </div>
    </div>  
  )
}

export default App