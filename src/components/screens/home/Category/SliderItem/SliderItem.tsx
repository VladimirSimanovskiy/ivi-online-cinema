import { FC, ReactNode } from 'react'
import styles from './SliderItem.module.scss'
import Image from 'next/image'
import { IFilmographyItem } from '@/interfaces/person/IFilmographyItem'
import { truncateText } from '@/functions/truncateText'
import Link from 'next/link'
import { IMovie } from '@/interfaces/IMovie'
const SliderItem: FC<{ film: IMovie }> = ({ film }) => {
  return (
    <div className={styles.sliderItem}>
      <Link href="/">
        <div className={styles.image}>
          <img src={film.poster} alt="poster" />
          <div className={styles.imageOverlay} >
            <div className={styles.iconsBlock}>
              <div className={styles.icon}>
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path fill="rgba(255,255,255, 1)" d="M98.78,0H29.22A7.21,7.21,0,0,0,22,7.19V120.8a7.08,7.08,0,0,0,4.42,6.63,7.22,7.22,0,0,0,7.87-1.5L63.14,97.59a1.23,1.23,0,0,1,1.72,0l28.86,28.33a7.21,7.21,0,0,0,7.87,1.5A7.08,7.08,0,0,0,106,120.8V7.19A7.21,7.21,0,0,0,98.78,0ZM100,120.8a1.14,1.14,0,0,1-.74,1.09,1.17,1.17,0,0,1-1.34-.25h0L69.06,93.31a7.26,7.26,0,0,0-10.13,0L30.08,121.64a1.18,1.18,0,0,1-1.34.25A1.14,1.14,0,0,1,28,120.8V7.19A1.21,1.21,0,0,1,29.22,6H98.78A1.21,1.21,0,0,1,100,7.19Z"/></svg>
              </div>
              <div className={styles.icon}>
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M21.5 20c-.378-.003-.614.383-.443.717l.99 1.984c.28.63 1.214.163.883-.44l-.99-1.985c-.08-.168-.254-.274-.44-.275zM6.49 7c-.48 0-.7.722-.226.946l1.992.984c.606.33 1.075-.6.443-.88l-1.993-.985C6.633 7.027 6.573 7 6.49 7zM30 10.5c0 .277-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5h2c.277 0 .5.223.5.5zM17.5 0c.277 0 .5.223.5.5v2c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-2c0-.277.223-.5.5-.5zm-5.092 4.03c-.25-.05-.537-.055-.803.1-.265.153-.402.41-.476.655-.075.244-.1.5-.103.777-.007.554.072 1.19.162 1.834.09.644.194 1.293.25 1.82.1.954-.185 1.214-.75 1.696-.413.354-.986.707-1.528 1.092-.542.384-1.072.774-1.477 1.162-.202.194-.374.386-.503.605-.13.22-.23.497-.157.8.073.304.283.505.496.645.215.14.457.24.726.328.538.176 1.19.3 1.852.416.662.114 1.333.217 1.873.333.952.205 1.16.507 1.46 1.217.207.49.393 1.123.605 1.74.212.617.43 1.222.69 1.715.13.246.266.467.44.652.176.186.412.354.716.38.305.025.562-.102.766-.255.205-.153.38-.345.55-.566.343-.442.667-1.002.986-1.574.318-.573.63-1.155.908-1.614.41-.83.91-.906 1.66-.96.552-.023 1.23-.013 1.904-.016.673-.004 1.337-.02 1.9-.104.28-.042.536-.1.77-.2.235-.103.475-.263.6-.548.125-.285.077-.576-.012-.814-.09-.24-.226-.46-.39-.684-.33-.45-.78-.92-1.247-1.39-.465-.468-.946-.933-1.312-1.33-.672-.697-.63-.89-.38-1.63.18-.51.446-1.13.698-1.75.254-.618.495-1.232.626-1.78.066-.272.107-.528.092-.786-.014-.258-.098-.554-.342-.758-.243-.204-.528-.24-.79-.232-.263.007-.53.062-.82.142-.574.16-1.226.428-1.88.71-.654.28-1.312.622-1.855.837-.864.366-1.314.245-2.01-.158-.46-.295-1.003-.8-1.55-1.18-.547-.378-1.09-.802-1.596-1.052-.253-.126-.495-.224-.746-.274zm.303 1.17c.414.205.936.61 1.472.98.535.37 1.082.88 1.58 1.2.497.317.895.582 1.39.624.498.042.947-.15 1.528-.38.58-.23 1.24-.57 1.883-.847.64-.276 1.27-.53 1.753-.666.625-.206.684.066.618.44-.105.438-.33 1.027-.58 1.634-.246.606-.515 1.233-.713 1.79-.198.56-.38.873-.255 1.39.117.49.446.825.844 1.255.396.43.88.897 1.334 1.357.456.46.885.913 1.15 1.277.416.526-.094.626-.31.666-.46.07-1.096.088-1.756.092-.66.003-1.343-.007-1.94.017-.595.023-1.072.03-1.503.28-.43.25-.67.66-.97 1.16-.303.497-.615 1.085-.926 1.645-.313.56-.628 1.093-.904 1.45-.406.435-.565.354-.795-.063-.207-.396-.422-.973-.63-1.576-.207-.603-.408-1.237-.617-1.778-.208-.54-.37-.983-.752-1.304-.382-.32-.85-.407-1.432-.53-.583-.122-1.26-.226-1.908-.34-.65-.113-1.27-.248-1.71-.382-.667-.203-.372-.528-.18-.705.33-.31.83-.69 1.36-1.067.53-.376 1.09-.757 1.56-1.115.467-.358.85-.63 1.054-1.092.202-.46.14-.925.082-1.5-.06-.574-.167-1.226-.256-1.855-.09-.63-.16-1.24-.153-1.682-.027-.45.232-.576.684-.375zM10.5 17c-.13.004-.253.058-.343.15L.64 26.652c-.895.893-.776 2.134-.105 2.81.672.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.325-.328-.47-.826.102-1.397l9.518-9.503c.325-.318.083-.857-.364-.857z"/></svg>
              </div>
              <div className={styles.icon}>
              <svg fill="none" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="10" /> <path d="M22 2L2 22" /> </svg>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.score}>{film.rating.toFixed(1)}</p>
              <div className={styles.property}>
                <p>сюжет</p>
              <div className={styles.progressBar}>
                <div className={styles.currentProgress}></div>
              </div>
              </div>
              <div className={styles.filmTags}>
                <p>{`${film.premiere.split('-')[0]}`}, {film.countries[0].name}, {film.type === 'movie' && 'фильм'}</p>
                <p>{film.movieLength} минут</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <p className={styles.name}>{truncateText(film.name, 15, 'break-word')}</p>
          <span>Бесплатно</span>
        </div>
      </Link>
    </div>
  )
}

export default SliderItem