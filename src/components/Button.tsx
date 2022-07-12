import React from "react"

type ButtonProps = {
    handler : (event : React.MouseEvent<HTMLButtonElement> , id : number) => void
}

const Button = (props : ButtonProps) => {
  return (
    <div>
        <button onClick={(event)=>{props.handler(event , 3)}}>Handler</button>
    </div>
  )
}

export default Button