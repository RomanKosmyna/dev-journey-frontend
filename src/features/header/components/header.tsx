import Link from "next/link";

function Header() {
    return (
        <header>
            <nav>
                <Link href={"/"}>Home</Link>
            </nav>
        </header>
    );
}

export default Header;
