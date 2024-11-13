import { createContext } from "react"
import { getEnv } from "./functions"

export const UserContext = createContext({})
export const BACKEND_URL = getEnv("VITE_SERVER_URL")
export const SUCCESS_STATUS = [200, 201] 

