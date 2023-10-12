'use client'

import Image from 'next/image'

const Project = ({ project }: { project: any }) => {
  return (
    <li key={project._id}>
      <div className="relative h-60">
        <Image
          alt={project.title}
          src={project.mainImage?.asset?.url}
          fill
          sizes="100%"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div>{project.title}</div>
    </li>
  )
}

export default Project
