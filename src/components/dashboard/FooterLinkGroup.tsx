import Link from "next/link";

export function FooterLinkGroup({
    title,
    links,
  }: {
    title: string
    links: { label: string; href: string }[]
  }) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">{title}</h3>
        <ul className="flex flex-col gap-2 text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }