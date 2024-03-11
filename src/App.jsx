
import './App.css'
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import BuscadorPage from './pages/BuscadorPage';
import Perfil from './pages/Perfil';
import ClubPage from './pages/ClubPage';


function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <HomePage />
      break
      case "/BuscadorPage":
        component = <BuscadorPage />
        break
        case "/Perfil":
          component = <Perfil/>
          break
          case "/ClubPage":
            component = <ClubPage/>
            break
  }
  return (
    <>
    <Navbar/>
    <div className='container'>{component}</div>
    </>
  )
}

export default App
