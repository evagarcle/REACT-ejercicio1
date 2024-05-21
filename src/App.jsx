
import './App.css'
import Person from './components/Person/Person'


function App() {
   const name = "Eva";
   const whoIam = <h1>Hola, me llamo {name}</h1>

  return (
    
      <div>
       <p>Hola</p>
      <span> <Person name={"Eva"} surname={"García"} age={27} /></span>
      <br />
      <span> <Person name={"Iván"} surname={"García"} age={31} /></span>
      <br />
      <span><Person name={"Óscar"} surname={"García"} age={22} /></span>
      <br />
      <span><Person name={"Álvaro"} surname={"García"} age={15} /></span>
       
       
       
       {whoIam}
      </div>
      
  )
}

export default App
