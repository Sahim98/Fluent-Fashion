import { useContext } from "react"
import AuthContext from "./components/Contexts/AuthContext"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import SignUp from "./pages/SignUp/SignUp"
import { useTitle, useUser } from "./utils/hooks"


function App() {
  useTitle('Flaunt Fashion');

  const user = useUser();
 // console.log(user)

    return (
      <AuthContext>
        <Header />
        { user._id? <HomePage />:<SignUp/>}
        <Footer />
      </AuthContext>
    );
}

export default App;