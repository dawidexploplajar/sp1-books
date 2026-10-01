import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [tytul, settytul] = useState(' ')
    const [autor, setautor] = useState(' ')
      const [gatunek, setgatunek] = useState(' ')

      const dodajksiazke = (e) => {
        e.preventDefault();
      }

      console.log (
        `tytul ${tytul}, autor ${autor}, gatunek ${gatunek}`
        
      )

    };      

  return (
    <form onSubmit={dodajksiazke}> 
      <div className="mb-3"></div>
      <label htmlFor="tytul" className="fromlabel">
        tytuł książki
      </label>
    </form>
  )

