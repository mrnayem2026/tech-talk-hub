import Image from 'next/image'
import styles from './navbar.module.css'
import facebook from './../../../public/facebook.png'
import instagram from './../../../public/instagram.png'   
import tiktok from './../../../public/tiktok.png'
import youtube from './../../../public/youtube.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <main className={styles.container}>
      <div className={styles.social}>
          <Image src={facebook} alt='facebook' width={24} height={24}/>
          <Image src={instagram} alt='instagram' width={24} height={24}/>
          <Image src={tiktok} alt='tiktok' width={24} height={24}/>
          <Image src={youtube} alt='youtube' width={24} height={24}/>
      </div>
      <div className={styles.logo}>TechTalk Hub</div>
      <div className={styles.links}>
          {/* <ThemeToogle/> */}
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/" className={styles.link}>Contack</Link>
          <Link href="/" className={styles.link}>About</Link>
      </div>
    </main>
  )
}

export default Navbar