import Link from "next/link";

type Props = {
    link: string;
    text: string;
    styles?: string;
};

export default function NavigationLink({ link, text, styles }: Props) {
    return (
        <Link className={styles} href={link}>
            {text}
        </Link>
    )
}
