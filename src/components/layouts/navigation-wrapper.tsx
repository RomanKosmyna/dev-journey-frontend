type Props = {
    children: React.ReactNode;
    styles?: string;
};

export default function NavigationWrapper({ children, styles }: Props) {
    return (
        <nav className={styles}>
            {children}
        </nav>
    )
}
