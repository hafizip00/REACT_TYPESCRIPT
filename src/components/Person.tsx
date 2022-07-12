type PersonProp = {
    p : {
        name : string
        age : number
    }
}

const Person = (props : PersonProp) => {
    const p = props.p
  return (
    <div>{props.p.age} {p.name}</div>
  )
}

export default Person