import React from "react"

type InputProps = {
    value : string
    changeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props : InputProps) => {
  return (
    <div>
        <input value={props.value} onChange={props.changeHandler}/>
    </div>
  )
}

export default Input