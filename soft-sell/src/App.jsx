import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Context from './context/Context'
import { useState } from 'react'

function App() {


const [darkMode,setDarkMode]=useState(true);


const context_data={

   darkMode:darkMode,
   setDarkMode:setDarkMode,
}


  return (
     <Context.Provider value={context_data}>
  
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainPage/>} />
     </Routes>
  </BrowserRouter>
  </Context.Provider>
  )
}

export default App
