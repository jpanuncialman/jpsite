import { getContactPage } from '@/sanity/sanityutil'
import styles from '../page.module.scss'
import Header from '../components/Header'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const Contact = async () => {
  const contactPage = await getContactPage()

  return (
    <main className={`${styles.main} relative h-screen`}>
      <Header />
      <div id="project-container" className="pt-5 lg:pt-20">
        <h1 className={styles['header']}>{contactPage.title}</h1>
        <div id="project-body" className="mb-10 lg:mb-20">
          <PortableText value={contactPage.body} />
        </div>
        <div>
          <Link href="/">← Go back</Link>
        </div>
      </div>
    </main>
  )
}

export default Contact
