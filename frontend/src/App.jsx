import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DataForm from './DataForm'
import Info from './Info'
function App() {

  return (
    <div>
      <Navbar/>
      <Info/>
      <DataForm/>
      <Footer/>
    </div>
  )
}

export default App
