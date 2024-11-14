import { useContext } from "react"
import { UserContext } from "./variables"


// get user related data from context 
export const useUser = () => {
    const data = useContext(UserContext)
   // console.log(data._id)
    return data
}

// set title dynamically
export const useTitle = (title : string | null) => {
    document.title = title ? `${title} - Flaunt Fashion` : "Flaunt Fashion"
}