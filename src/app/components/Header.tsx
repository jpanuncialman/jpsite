"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import styles from "../page.module.scss";

// import Navi from '../Navi/Navi';

const Header = (): JSX.Element => {
  const [showNavi, setShowNavi] = useState(false);
  const handleShowNavi = (show: boolean) => {
    setShowNavi(show);
  };
  return (
    <div className={`relative cursor-pointer h-9 w-12 mt-4`}>
      <NaviHamburger showNavi={showNavi} handleShowNavi={handleShowNavi} />
      {showNavi && <Navi handleShowNavi={handleShowNavi} />}
    </div>
  );
};

interface NaviHamburger {
  showNavi: boolean;
  handleShowNavi: (showNavi: boolean) => void;
}

const NaviHamburger = ({
  showNavi,
  handleShowNavi,
}: NaviHamburger): JSX.Element => {
  const getPositionClass = (position: number) => {
    let classToReturn = "";
    switch (position) {
      case 2:
        classToReturn = `top-1/2 -translate-y-1/2`;
        break;
      case 3:
        classToReturn = `bottom-0`;
        break;
      default:
        classToReturn = `top-0`;
    }

    return classToReturn;
  };

  const getDelayClass = (d) => {
    let toReturn = "";
    switch (d) {
      case 1:
        toReturn = "delay-0";
        break;
      case 2:
        toReturn = "delay-150";
        break;
      case 3:
        toReturn = "delay-300";
        break;
    }
    return toReturn;
  };
  const renderHamburgerBlockLinks = (naviIsShown: any) => {
    const renderArr = [1, 2, 3];

    return renderArr.map((i) => (
      <div
        className={`w-full h-1 absolute bg-standard h-1 ${getPositionClass(
          i,
        )} transition-hamburger ${getDelayClass(i)} ${
          naviIsShown ? "opacity-0" : "opacity-100"
        }`}
        key={`hamburger-line-${i}`}
        position={i}
      />
    ));
  };
  return (
    <div
      className={`max-w-2xl cursor-pointer h-9 w-14 relative mt-5`}
      onClick={() => handleShowNavi(!showNavi)}
    >
      {renderHamburgerBlockLinks(showNavi)}
    </div>
  );
};

interface Navi {
  handleShowNavi: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
    { title: "Home", slug: "/" },
    { title: "Contact", slug: "/contact" },
  ];

  return (
    <div
      className={`w-screen flex items-start justify-center p-5 bg-blueRgba fixed top-0 left-0 right-0 bototm-0 z-3 text-white text-4xl overflow-hidden inset-0 animate-fadeIn`}
    >
      <ul className={`max-w-2xl w-full p-5 relative m-0 pt-7 overflow-y-auto`}>
        <div
          className={`top-0 left-0 w-9 cursor-pointer absolute before:block before:h-1 before:w-full before:bg-white after:block after:h-1 after:w-full after:bg-white ${styles["styled-x"]}`}
          onClick={() => handleShowNavi(false)}
        />
        {sitePages.map((page) => {
          return (
            <li key={page.slug} className="mb-0">
              <a className="text-white text-7xl uppercase" href={page.slug}>
                {page.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;