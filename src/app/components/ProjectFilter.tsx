'use client'

import React, { useState, useRef, useEffect } from 'react'

import { space_mono } from '@/src/fonts'

const ProjectFilter = ({
  projects,
  selectedFilter,
  setSelectedFilter,
}: {
  projects: any
  selectedFilter: string
  setSelectedFilter: (cat: string) => void
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Map categories
  const catArr = projects.map((p) => p.categories.map((c) => c.title)).flat()
  const cats = Array.from(new Set(catArr))

  // Dropdown
  const btnRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !btnRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        console.log('CLICK!!!')
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', closeMenu)

    return () => document.body.removeEventListener('mousedown', closeMenu)
  }, [])

  const handleClick = (c: string) => {
    selectedFilter === c ? setSelectedFilter('') : setSelectedFilter(c)
  }

  const handleFilterButtonClick = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleFilterItemClick = (e: Event, c: string) => {
    e.preventDefault()
    handleClick(c)
    setDropdownOpen(false)
  }
  return (
    <div className={`${space_mono.className}`}>
      {/*** MOBILE */}
      <div className="block lg:hidden mb-10">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blueRgba hover:bg-blueRgbaHover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-between"
          type="button"
          onClick={handleFilterButtonClick}
          ref={btnRef}
        >
          {selectedFilter === '' ? '(filters)' : selectedFilter}{' '}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          ref={menuRef}
          className={`z-10 ${
            dropdownOpen ? 'block' : 'hidden'
          } divide-y divide-gray-100 rounded shadow w-44 transition-filterIn w-full mt-6 relative overflow-visible`}
        >
          <ul
            className="text-sm w-full bg-slate-700 text-white absolute top-0 left-0"
            aria-labelledby="dropdownDefaultB"
          >
            <li>
              <a
                href="#"
                className={`cursor-pointer block px-8 py-4 ${
                  selectedFilter === '' ? 'bg-slate-400' : 'bg-slate-700'
                } hover:bg-blueRgbaHover text-white `}
                onClick={(e) => handleFilterItemClick(e, '')}
              >
                All Categories
              </a>
            </li>
            {cats.map((c) => (
              <li>
                <a
                  href="#"
                  className={`cursor-pointer block px-8 py-4 ${
                    selectedFilter === c ? 'bg-slate-400' : 'bg-slate-700'
                  } hover:bg-blueRgbaHover text-white `}
                  onClick={(e) => handleFilterItemClick(e, c)}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*** DESKTOP */}
      <div className="hidden lg:block mb-10">
        <ul className="flex text-base">
          {cats.map((c) => (
            <li>
              <button
                className={`cursor-pointer ${
                  selectedFilter === c ? 'bg-blueRgbaHover' : 'bg-blueRgba'
                } hover:bg-blueRgbaHover text-white px-8 py-2 mr-5 rounded-full`}
                onClick={() => handleClick(c)}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectFilter
