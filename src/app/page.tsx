import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/Header'
import { getHomePage, getPosts } from '../../sanity/sanityutil'
import ProjectList from './components/ProjectList'

interface Project {
  title: string
  description: string
  // mainImage: ;
}

export default async function Home() {
  const homePageData = await getHomePage()
  const projects = await getPosts()

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
