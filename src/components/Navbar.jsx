import React, {useRef} from 'react'
import { MdClose } from "react-icons/md";


import './Navbar.css'


const Navbar = () => {
// useRef hookdur 
// 2018-ci ilde class componentlerle ishleyirdiler 
    const qaraGundeOlanMenyu = useRef()

    const menyunuAc = () => {
        qaraGundeOlanMenyu.current.classList.add("aktiv")
    }

    const menyunuBagla = () => {
        qaraGundeOlanMenyu.current.classList.remove("aktiv")
    }


  return (

    <>

    <div className="mobile-menu position-fixed" ref={qaraGundeOlanMenyu}>
       <MdClose className='text-white baglama-iconu' onClick={menyunuBagla} />
       <nav className="mobile-links">
            <a href="">What we do</a>
            <a href="">Career</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
       </nav>
    </div>

    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="/assets/images/logo.svg" alt="" />
    </a>
    <button onClick={menyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
       
        <li className="nav-item">
          <a
         className="nav-link" href="/">What we do</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/kariyera">Career</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/bizimle-elaqe">Contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/meqaleler">Blog </a>
        </li>
   
      </ul>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar