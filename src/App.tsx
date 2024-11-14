import AuthContext from "./components/Contexts/AuthContext"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import { useTitle } from "./utils/hooks"


function App() {
  useTitle("Home")
  return (
    <AuthContext>
    <Header/>
    <HomePage/>
    <Footer/>
    </AuthContext>
  )
 
}

export default App;