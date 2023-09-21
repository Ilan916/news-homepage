import React, { useState } from 'react'
import { IconMenu, IconMenuClose, Logo } from '../assets';

function Navbar() {

  const [mobile, setMobile] = useState(false);
  const OpenNav = () => { setMobile(true) }
  const CloseNav = () => { setMobile(false) }

  const data = [
    { id: 1, name: "Home" },
    { id: 2, name: "News" },
    { id: 3, name: "Popular" },
    { id: 4, name: "Trending" },
    { id: 5, name: "Categories" },
  ];

  return (
    <div className='navbar'>
      <img className='logo' src={Logo} alt="Logo" />
      <div className={`mobile-menu-background ${mobile ? 'displayElement' : 'deleteElement'}`}></div>
      <div className={mobile ? 'mobile-menu-open' : 'mobile-menu-close'}>
        <img onClick={() => CloseNav()} className='close-button' src={IconMenuClose} alt="Icon-close" />
        <ul>
          {data.map((nav) => (
            <li key={nav.id}><a href="#">{nav.name}</a></li>
          ))}
        </ul>
      </div>
      <img onClick={() => OpenNav()} className='menu-burguer' src={IconMenu} alt="burguer-menu" />
    </div>
  )
}

export default Navbar