"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type CSSModule = Record<string, string>;

type Props = {
    styles: CSSModule;
};

function HeaderNavigation({ styles }: Props) {
    const currentUrl = usePathname();

    return (
        <nav className={styles.nav}>
            <Link
                className={`${styles.title} ${currentUrl === "/" ? styles.active : ""}`}
                href={"/"}
            >
                Home
            </Link>
            <Link
                className={`${styles.title} ${currentUrl === "/docs" ? styles.active : ""}`}
                href={"/docs"}
            >
                Docs
            </Link>
            <Link
                className={`${styles.title} ${currentUrl === "/about" ? styles.active : ""}`}
                href={"/about"}
            >
                About
            </Link>
        </nav>
    );
}

export default HeaderNavigation;
