import styles from '../styles/Home.modules.css'
import Sidebar from '../components/sidebar'
export default function Home() {
  return (
  <div className={styles.wrapper}>
    {/*sidebar*/}
    <Sidebar/>
    <div className={styles.main}>
      {/*conversationList*/}
      {/*chat View*/}
    </div>
  </div>
  )
}