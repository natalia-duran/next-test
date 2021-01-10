import styles from './FormLayout.module.css';

const FormLayout = ({children}) => {

    return(
        <>
            <h1 className={styles.form__title}>Get Started Today!</h1>
            <div className={styles.form__layout}>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default FormLayout;