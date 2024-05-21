import "./Person.css"

const Person = (props) => {
  return (

    <span>Mi nombre es: {props.name}, mi apellido es: {props.surname} y mi edad es: {props.age} años</span>
  )
}

export default Person