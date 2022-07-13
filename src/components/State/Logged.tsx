import { useState } from "react"

type Looged = {
    name : string,
    email : string
}

const Logged = () => {
    
    const [log , setlog] = useState<Looged | null>({} as Looged)
    const loginHanlder = () =>{
        setlog({
            name : "IPMAN",
            email : "IPMAN@gmail.com"
        });
    }
    const logoutHandler = () =>{
        setlog(null)
    }
  return (
    <div>
        <button onClick={loginHanlder}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
        <h1>{log ? "Logged In" : "Logged Out"}</h1>
        <h4>{log?.name}</h4>
        <h4>{log?.email}</h4>
    </div>
  )
}

export default Logged