import styles from './Menu.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Menu = () => {

    return(

        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
            </Head>

            <div className={styles.menu}>
                <div className={styles.navTop}>
                    <ul className={styles.navbar}>
                        <li data-bs-toggle="tooltip" data-bs-placement="right">
                            <div className={styles.menu__icon}>
                                <Image src="/assets/sample-logo.png" width={30} height={30} />
                                <p className={styles.menu__txt}>Hunters Hub</p>
                            </div>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="right">
                            <Link href="/Busquedas">
                                <div className={styles.menu__icon}>
                                    <Image src="/assets/layer-regular-24.png" width={28} height={28} />
                                    <p className={styles.menu__txt}>Busquedas</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Candidatos">
                                <div className={styles.menu__icon}>
                                    <Image src="/assets/group-regular-24.png" width={28} height={28} />
                                    <p className={styles.menu__txt}>Candidatos</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Reclutadores">
                                <div className={styles.menu__icon}>
                                    <Image src="/assets/briefcase-alt-regular-24.png" width={28} height={28} />
                                    <p className={styles.menu__txt}>Reclutadores</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navBottom}>
                    <Link href="/Account">
                        <div className={styles.menu__icon}>
                            <Image src="/assets/user-regular-24.png" width={28} height={28} />
                            <p className={styles.menu__txt}>Mi cuenta</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu; 