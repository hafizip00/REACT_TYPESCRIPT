type GreetProps = { 
    name : string
    count : number
}

export const Greet = (props : GreetProps) =>{
    return (
        <div>Welcom to TS React {props.name}, {props.count}</div>
    )
}