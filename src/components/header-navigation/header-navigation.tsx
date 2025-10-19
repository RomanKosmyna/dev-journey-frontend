"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { HomeContext } from "@/features/home/context/home-provider";

type CSSModule = Record<string, string>;

type Props = {
    styles: CSSModule;
};

function HeaderNavigation({ styles }: Props) {
    const currentUrl = usePathname();
    const { hoveredLink, setHoveredLink } = useContext(HomeContext);

    const updateModelAnimation = (e) => {
        const linkId = e.currentTarget.id;
        setHoveredLink(linkId);
        // console.log("hovered");
    };

    const endModelAnimation = () => {
        setHoveredLink(null);
    }

    return (
        <nav className={styles.nav}>
            <Link
                id="home_nav_link"
                onMouseEnter={updateModelAnimation}
                onMouseLeave={endModelAnimation}
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
