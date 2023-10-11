"use client"

const ProjectList = ({projects}: {projects: any[]}) => {
  <ul className='list-none p-0 m-0'>
    {projects.map(project => {
      return(
      <div>
      <div key={project._id}>{project.title}</div>
      <p>{project.description}</p>
      </div>)
    }
    )
    }

  </ul>
}

export default ProjectList