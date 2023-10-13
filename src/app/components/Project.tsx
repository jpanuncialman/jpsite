'use client'

import Image from 'next/image'
import Link from 'next/link'

import { space_mono } from '@/src/fonts'

const Project = ({ project }: { project: any }) => {
  return (
    <li key={project._id}>
      <Link className="group" href={`/projects/${project.slug.current}`}>
        <div className="relative h-60 group-hover:blur-sm">
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
        <div
          className={`text-center font-semibold mt-4 text-base ${space_mono.className} group-hover:text-blueRgba`}
        >
          {project.title}
        </div>
      </Link>
    </li>
  )
}

export default Project
