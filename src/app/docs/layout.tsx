import HeaderNavigation from "@/components/header-navigation/header-navigation";
import HomeHeader from "@/features/home-header/components/home-header";

function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            {/* <HomeHeader /> */}
            <HeaderNavigation styles={{ "": "" }} />
            <h1>Docs</h1>
            {children}
        </section>
    );
}

export default DocsLayout;
