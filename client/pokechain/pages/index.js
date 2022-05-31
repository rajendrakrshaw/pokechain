
import ConversationList from '../components/ConversationList'
import Sidebar from '../components/sidebar'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
  <div className={styles.wrapper}>
    {/*sidebar*/}
    <Sidebar/>
    <div className={styles.main}>
      {/*conversationList*/}
      <ConversationList />
      {/*chat View*/}
    </div>
  </div>
  )
}