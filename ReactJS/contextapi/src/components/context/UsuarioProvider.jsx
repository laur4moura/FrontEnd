import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState("Laura")
     
  return(
    <UsuarioContext.Provider
    value={{
        usuario, 
        setUsuario}}
    >
        {children}
    </UsuarioContext.Provider>

  )
}

export default UsuarioProvider;