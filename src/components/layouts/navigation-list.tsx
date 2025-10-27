import NavigationLink from "@/components/layouts/navigation-link";

export default function NavigationList() {
    const navLinkArray = [
        { link: "/", text: "Home", styles: "" },
        { link: "/docs", text: "Docs", styles: "" },
        { link: "/about", text: "About", styles: "" },
    ];

    return (
        <ul>
            {navLinkArray.map((navLink) => {
                return <NavigationLink
                    key={crypto.randomUUID()}
                    link={navLink.link}
                    text={navLink.text}
                    styles=""
                />
            })}
        </ul>
    )
}
