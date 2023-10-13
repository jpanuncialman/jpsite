'use client' // This is a client component 👈🏽
import React, { useState } from 'react'
import styles from '../page.module.scss'
import Link from 'next/link'
import { playfair_display, inter } from '../../fonts'
// import Navi from '../Navi/Navi';

const Header = (): JSX.Element => {
  const [showNavi, setShowNavi] = useState(false)
  const handleShowNavi = (show: boolean) => {
    setShowNavi(show)
  }
  return (
    <header id="hamburger-container" className="w-full flex justify-between">
      <div
        id="logo"
        className={`${styles['header']} ${playfair_display.className}`}
      >
        <Link href={'/'}>JP</Link>
      </div>
      <div className={`relative cursor-pointer h-9 w-14`}>
        <NaviHamburger showNavi={showNavi} handleShowNavi={handleShowNavi} />
        {showNavi && <Navi handleShowNavi={handleShowNavi} />}
      </div>
    </header>
  )
}

interface NaviHamburger {
  showNavi: boolean
  handleShowNavi: (showNavi: boolean) => void
}

const NaviHamburger = ({
  showNavi,
  handleShowNavi,
}: NaviHamburger): JSX.Element => {
  const getPositionClass = (position: number) => {
    let classToReturn = ''
    switch (position) {
      case 2:
        classToReturn = `top-1/2 -translate-y-1/2`
        break
      case 3:
        classToReturn = `bottom-0`
        break
      default:
        classToReturn = `top-0`
    }

    return classToReturn
  }

  const getDelayClass = (d) => {
    let toReturn = ''
    switch (d) {
      case 1:
        toReturn = 'delay-0'
        break
      case 2:
        toReturn = 'delay-150'
        break
      case 3:
        toReturn = 'delay-300'
        break
    }
    return toReturn
  }
  const renderHamburgerBlockLinks = (naviIsShown: any) => {
    const renderArr = [1, 2, 3]

    return renderArr.map((i) => (
      <div
        className={`w-full h-1 absolute bg-standard h-1 ${getPositionClass(
          i
        )} transition-hamburger ${getDelayClass(i)} ${
          naviIsShown ? 'opacity-0' : 'opacity-100'
        }`}
        key={`hamburger-line-${i}`}
        position={i}
      />
    ))
  }

  const handleHamburgerClick = () => {
    handleShowNavi(!showNavi)
  }
  return (
    <button
      className={`max-w-2xl cursor-pointer h-9 w-14 relative mt-5 z-`}
      onClick={handleHamburgerClick}
    >
      {renderHamburgerBlockLinks(showNavi)}
    </button>
  )
}

interface Navi {
  handleShowNavi: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Navi = ({ handleShowNavi }: Navi): JSX.Element => {
  // const data = useStaticQuery(graphql`
  // 	query NaviQuery {
  // 		allSanitySitePage: allSanitySitePage {
  // 			edges {
  // 				node {
  // 					slug {
  // 						current
  // 					}
  // 					title
  // 				}
  // 			}
  // 		}
  // 	}
  // `);

  // Render Site Pages Array
  // let sitePages = data
  // 	? data.allSanitySitePage.edges.map(edge => {
  // 			return { title: edge.node.title, slug: `/${edge.node.slug.current}` };
  // 	  })
  // 	: [];

  const sitePages = [
    { title: 'Home', slug: '/' },
    { title: 'Contact', slug: '/contact' },
  ]

  const handleCloseClick = () => {
    handleShowNavi(false)
  }

  return (
    <nav
      className={`w-screen flex items-start justify-center p-5 bg-blueRgba fixed top-0 left-0 right-0 bototm-0 z-3 text-white text-4xl overflow-hidden inset-0 animate-fadeIn z-10 ${inter.className}`}
    >
      <ul
        className={`max-w-2xl w-full py-5 relative m-0 pt-7 overflow-y-auto overflow-x-hidden`}
      >
        <div
          id="x-container"
          className="flex absolute w-full justify-end top-0 h-closeBtn"
        >
          <button
            className={`top-0 left-0 w-9 cursor-pointer /*absolute*/ before:block before:h-1 before:w-full before:bg-white after:block after:h-1 after:w-full after:bg-white ${styles['styled-x']} relative`}
            onClick={handleCloseClick}
          />
        </div>
        {sitePages.map((page) => {
          return (
            <li key={page.slug} className="my-8">
              <a
                className="text-white text-5xl lg:text-7xl uppercase font-semibold"
                href={page.slug}
              >
                {page.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header
