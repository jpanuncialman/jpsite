import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/Header'
import { getHomePage, getProjects } from '../../sanity/sanityutil'
import ProjectList from './components/ProjectList'
import type { Metadata } from 'next'

interface Project {
  title: string
  description: string
  // mainImage: ;
}

export const metadata: Metadata = {
  title: 'Joe Panuncialman',
  description:
    "Hey! I'm Joe, a musician, dev, content creator, and more. Come say hi!",
}

export default async function Home() {
  const homePageData = await getHomePage()
  const projects = await getProjects()

  return (
    <main className={styles.main}>
      <Header />

      <div className={`${styles['header-container']}`}>
        <h1 className={styles['header']}>{homePageData.header}</h1>
      </div>

      <ProjectList projects={projects} />
    </main>
  )
}
