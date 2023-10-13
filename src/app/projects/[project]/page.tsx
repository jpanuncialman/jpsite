import { getProject } from '@/sanity/sanityutil'
import styles from '../../page.module.scss'
import Header from '../../components/Header'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { project: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.project

  // fetch data
  const project = await getProject(slug)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${project.title} | Joe Panuncialman`,
    openGraph: {
      images: [
        project.mainImage?.asset?.url,
        /*...previousImages*/
      ],
    },
  }
}

const Project = async ({ params }: { params: any }) => {
  const slug = params.project

  const project = await getProject(slug)

  console.log('PROJECT!!: ', project)

  return (
    <main className={`${styles.main} relative h-screen`}>
      <Header />
      <div id="project-container" className="pt-5 lg:pt-20">
        <h1 className={styles['header']}>{project.title}</h1>
        <div className="relative h-96 mb-10 lg:mb-20">
          <Image
            alt={project.title}
            src={project.mainImage?.asset?.url}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              width: '100%',
              // height: 'auto',
            }}
          />
        </div>
        <div id="project-body" className="mb-10 lg:mb-20">
          <PortableText value={project.body} />
        </div>
        <div>
          <Link href="/">← Go back</Link>
        </div>
      </div>
    </main>
  )
}

export default Project
