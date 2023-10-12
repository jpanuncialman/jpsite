'use client'

import Project from './Project'
import { useState } from 'react'
import ProjectFilter from './ProjectFilter'

const ProjectList = ({ projects }: { projects: any[] }) => {
  const [selectedFilter, setSelectedFilter] = useState('')

  return (
    <>
      <ProjectFilter
        projects={projects}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ul className="list-none p-0 m-0 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => {
          if (
            selectedFilter === '' ||
            project.categories.some((c) => c.title === selectedFilter)
          )
            return <Project project={project} key={project._id} />
        })}
      </ul>
    </>
  )
}

export default ProjectList
