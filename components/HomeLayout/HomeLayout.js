import styles from './HomeLayout.module.css';

const HomeLayout = ({children}) => {

    return(
        <>
            <h1 className={styles.home__title}>Welcome!</h1>
            <div className={styles.home__layout}>
                {children}
            </div>
        </>
    )
}

export default HomeLayout;