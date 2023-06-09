import Link from 'next/link'
import styles from './MobileFooter.module.scss'
import Drawer from './Drawer/Drawer'
import { FC, useState } from 'react'
import { IHeader } from '../header/Header'

const MobileFooter:FC<IHeader> = ({ countries, genres }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
    if (isDrawerOpen) document.getElementsByTagName('body')[0].style.overflow="auto";
      else document.getElementsByTagName('body')[0].style.overflow="hidden";
  }
  return (
    <>
    {isDrawerOpen ? <Drawer genres={genres} countries={countries} /> : null}
      <div className={styles.tabBarPlate}>
        <div className={styles.tabBarMenu}>
          <Link href="/">
            <img src="/house-icon.svg" alt="My ivi" />
            <p>Мой Иви</p>
          </Link>
          <Link href="/">
            <img src="/catalog-icon.svg" alt="" />
            <p>Каталог</p>
          </Link>
          <Link href="/">
            <svg fill="#a5a1b2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" /></svg>
            <p>Поиск</p>
          </Link>
          <Link href="/">
            <img src="/tv.svg" alt="" />
            <p>TV+</p>
          </Link>
          <Link href="/" onClick={toggleDrawer}>
            <img src={isDrawerOpen ? 'x-icon.svg' : "/dots-icon.svg"} alt="" />
            <p>{isDrawerOpen ? 'Закрыть' : 'Ещё'}</p>
          </Link>
        </div>
      </div>
      </>
  )
}

export default MobileFooter