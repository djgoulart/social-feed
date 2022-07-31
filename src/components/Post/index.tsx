import React from 'react'

import styles from './Post.module.css'

type PostProps = {
  author: string
  content: string
}

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/djgoulart.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Diego Goulart</strong>
            <span>Software engineer</span>
          </div>
        </div>

        <time title="31 de julho às 18:28" dateTime="2022-07-31 18:28:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">diego.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
