import styles from './jul.module.scss'

export function Jul() {
  return (
    <div className={styles.page}>
      <div className={styles.pyro}>
        <div className={styles.before}></div>
        <div className={styles.after}></div>
      </div>
      <div className={styles.center}>
        <span className={styles.backdecor}></span>
        <span className={styles.dear}>DEAR JULIA</span>
        <span className={styles.also}>Also known as Yulichka-Krasotulichka</span>
      </div>
      <div className={styles.right}>
        <span className={styles.without}>This is me without you</span>
        <img
          className={styles.sad}
          src="https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={300}
        />
        <span className={styles.with}>and this is me with you</span>
        <img
          className={styles.happy}
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          height={300}
        />
      </div>
    </div>
  )
}
