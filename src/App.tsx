import AuthContext from "./components/Contexts/AuthContext"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useTitle } from "./utils/hooks"


function App() {
  useTitle("Home")
  return (
    <AuthContext>
    <Header/>
    <Footer/>
    </AuthContext>
  )
}

export default App
