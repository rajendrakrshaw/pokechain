import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/conversationList.module.css'
import Image from 'next/image'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'

const ConversationList = () => {
    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type="search" placeholder="Find or start a converstaion"/>
            </div>
        </div>
    ) 
}

export default ConversationList