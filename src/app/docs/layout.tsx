import GeneralHeader from "@/components/general-header/general-header";
import PageInnerWrapper from "@/components/layouts/page-inner-wrapper";
import PageWrapper from "@/components/layouts/page-wrapper";
import SideNavigation from "@/features/docs/components/side-navigation";

function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <GeneralHeader />
            <PageWrapper>
                <PageInnerWrapper>
                    <SideNavigation />
                    {children}
                </PageInnerWrapper>
            </PageWrapper>
        </section>
    );
}

export default DocsLayout;
