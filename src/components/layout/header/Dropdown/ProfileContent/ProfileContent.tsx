import Link from "next/link"
import MenuList from "./MenuList/MenuList"
import styles from "./ProfileContent.module.scss"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logout } from "@/store/slices/userSlice"

const ProfileContent = () => {

	const isAuth = useAppSelector(state => state.user.isAuth)
	const user = useAppSelector(state => state.user.user)
	const locale = useRouter().locale
	const dispatch = useAppDispatch()

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<div className={styles.content}>
			<MenuList />
			{!isAuth ? (
				<div className={styles.authBlock}>
				<Link href="/auth">
					<button className={styles.authButton}>
						{
							locale === 'ru'
							? `Войти или зарегистрироваться`
							: `Log in or register`
						}
					</button>
				</Link>
				<Link href="/admin">
					<button className={styles.authButton}>
						{
							locale === 'ru'
							? `Панель администратора`
							: `Admin panel`
						}
					</button>
				</Link>
				<div className={styles.settings}>
					<Link href="/">
						{
							locale === 'ru'
							? `Настройки`
							: `Settings`
						}
					</Link>
					<Link href="/">
						{
							locale === 'ru' 
							? `Помощь`
							: 'Help'
						}
					</Link>
				</div>
			</div>
			) : (
				<div className={styles.greetingBlock}>
				<p>{`Привет, ${user?.username}`}</p>
				<button className={styles.authButton} onClick={logoutHandler}>Выйти из аккаунта</button>
				</div>
			)}
		</div>
	)
}

export default ProfileContent