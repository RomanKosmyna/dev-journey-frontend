// "use client"

import NavigationList from "@/components/layouts/navigation-list";
import NavigationWrapper from "@/components/layouts/navigation-wrapper";

// import Link from "next/link";
// import styles from "../styles/header.module.css";
// import { usePathname } from "next/navigation";

// function Header() {
//     const currentUrl = usePathname();

//     return (
//         <header className={styles.header}>
//             <nav className={styles.nav}>
//                 <ul className={styles.nav_list}>
//                     <Link
//                         className={`${styles.title} ${currentUrl === "/" ? styles.active : ""}`} href={"/"}>
//                         Home
//                     </Link>
//                     <Link
//                         className={`${styles.title} ${currentUrl === "/docs" ? styles.active : ""}`} href={"/docs"}>
//                         Docs
//                     </Link>
//                     <Link
//                         className={`${styles.title} ${currentUrl === "/about" ? styles.active : ""}`} href={"/about"}>
//                         About
//                     </Link>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;

export default function Header() {
    return (
        <header>
            <NavigationWrapper>
                <NavigationList />
            </NavigationWrapper>
        </header>
    )
}
