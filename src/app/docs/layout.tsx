import Header from "@/features/header/components/header";

function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <header></header>
            <main>
                <aside></aside>
                {children}
                <aside></aside>
            </main>
            <footer></footer>
        </>
    );
}

export default DocsLayout;
