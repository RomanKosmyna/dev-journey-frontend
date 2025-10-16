import { ReactNode } from "react";
import styles from "./page-wrapper.module.css";

type PageWrapperProps = {
    children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className={styles.page_outer_wrapper}>
            {children}
        </div>
    );
}

export default PageWrapper;
