'use client'

const ProjectFilter = ({
  projects,
  selectedFilter,
  setSelectedFilter,
}: {
  projects: any
  selectedFilter: string
  setSelectedFilter: (cat: string) => void
}) => {
  const catArr = projects.map((p) => p.categories.map((c) => c.title)).flat()
  const cats = Array.from(new Set(catArr))

  const handleClick = (c: string) => {
    selectedFilter === c ? setSelectedFilter('') : setSelectedFilter(c)
  }
  return (
    <ul className="mb-10 flex">
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
  )
}

export default ProjectFilter
