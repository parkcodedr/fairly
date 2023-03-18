import React from 'react'

const NavBar = () => {
  return (
    <div className='nav__bar'>
        <div className='logo__wrapper'>
            <h2>Fairly</h2>
        </div>
        <div className='menu__wrapper'>
            <ul className='menu'>
                <li className='menu__item'>
                    <a className='menu__link'  href='/products'>Products</a>
                </li>
                <li className='menu__item'>
                    <a href='/about' className='menu__link' >About</a>
                </li>
                <li className='menu__item'>
                    <a className='menu__link'  href='/login'>Marketplace</a>
                </li>
            </ul>
        </div>
        <div className='get__start'>
            <button className='button  button__primary'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default NavBar