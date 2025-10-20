import HeaderNavigation from "../header-navigation/header-navigation";
import styles from "./general-header.module.css";

export default function GeneralHeader() {

    return (
        <header className={styles.header}>
            <div className={styles.inner_wrapper}>
                <HeaderNavigation styles={styles} />
            </div>
        </header>
    );
}
