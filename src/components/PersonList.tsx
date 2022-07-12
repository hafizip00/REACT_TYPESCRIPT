type list = {
    persons : {
        name : string
        age  :number
    }[],
    children : string
}

const PersonList = (props : list) => {
    const {persons} = props
  return (
    <div>{persons.map(p => (
    <div>
        <h1>{p.name}</h1>
        <p>{p.age}</p>
        <p>{props.children}</p>
    </div>
    ))}</div>
  )
}

export default PersonList