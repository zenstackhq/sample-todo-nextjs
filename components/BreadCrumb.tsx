import { Space } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    space: Space;
};

export default function BreadCrumb({ space }: Props) {
    const router = useRouter();

    const parts = router.asPath.split("/").filter((p) => p);
    const [base] = parts;
    if (base !== "space") {
        return <></>;
    }

    const items: Array<{ text: string; link: string }> = [];

    items.push({ text: "Home", link: "/" });
    items.push({ text: space.name || "", link: `/space/${space.slug}` });

    return (
        <div className="text-sm text-gray-600 breadcrumbs">
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        <Link href={item.link}>
                            <a>{item.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
