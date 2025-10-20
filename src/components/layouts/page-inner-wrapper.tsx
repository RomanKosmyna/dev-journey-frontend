import { ReactNode } from "react";
import styles from "./page-inner-wrapper.module.css";

type PageInnerWrapperProps = {
    children: ReactNode;
};

export default function PageInnerWrapper({ children }: PageInnerWrapperProps) {
    return (
        <div className={styles.page_inner_wrapper}>
            {children}
        </div>
    )
}
