import styles from './DashboardLayout.module.css';
import Menu from '../menu/Menu';


const DashboardLayout = ({children}) => {

    return(
        <div className={styles.layout}>
            <Menu />
            {children}
        </div>
    )
}

export default DashboardLayout;