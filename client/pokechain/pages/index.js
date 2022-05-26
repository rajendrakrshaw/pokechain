
import Sidebar from '../components/sidebar'
import styles from '../styles/sidebar.module.css'
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