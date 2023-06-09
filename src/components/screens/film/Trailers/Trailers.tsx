import React from 'react'
import styles from './trailers.module.sass';
import { useRouter } from 'next/router';
interface IProps {
    trailer: string
}
export const Trailers = ({trailer}: IProps) => {
    const locale = useRouter().locale
    return (
        <div className={styles.trailersSection__item}>
            <div className={styles.trailersSection__image}>
                <embed src={trailer} type='video/webm' width="286" height="160" />
            </div>
            <h4 className={styles.trailersSection__name}>{locale === 'ru' ? 'Трейлер' : 'Trailer'}</h4>
{/*             <h4 className={styles.trailersSection__duration}>104 мин.</h4> */}
        </div>
    )
}
