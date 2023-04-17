import styles from '../comments.module.sass'

export const NewComment = () => {
    return (
        <div className={styles.newComment}>
            <h2 className={styles.subtitle}>Оставить комментарий</h2>
            <div className={styles.newComment__form}>
                <input type="text" placeholder='Name' className={styles.newComment__name} />
                <textarea name="message" placeholder='Your message' className={styles.newComment__textarea} rows={5}></textarea>
                <button className={styles.newComment__btn}>Оставить комментарий</button>
            </div>
        </div>
    )
}