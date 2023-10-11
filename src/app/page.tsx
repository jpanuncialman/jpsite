import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/Header'
import { getPosts } from '../../sanity/sanityutil'

interface Project {
  title: string;
  description: string;
  // mainImage: ;
}

export default async function Home() {
  const projects = await getPosts()

  return (
    <main className={styles.main}>
      <Header />

      <div className={`${styles['header-container']}`}>
        <h1 className={styles['header']}>
          Joe Panuncialman is a dev in Brooklyn, NY watching lots of cooking
          vids.
        </h1>
      </div>

      <div>
        {projects.map((project: any) => (
          <div>
          <div key={project._id}>{project.title}</div>
          <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
