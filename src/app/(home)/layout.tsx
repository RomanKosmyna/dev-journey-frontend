import HomeHeader from "@/features/home-header/components/home-header";
import HomeContextProvider from "@/features/home/context/home-provider";

function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <HomeContextProvider>
                <HomeHeader />
                {children}
            </HomeContextProvider>
        </section>
    );
}

export default HomeLayout;
