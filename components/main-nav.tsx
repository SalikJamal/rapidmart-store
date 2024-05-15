"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

interface IMainNavProps {
    data: any;
}


export default function MainNav({ data }: IMainNavProps) {
    
    const pathname = usePathname()
    const routes = data.map(route => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
    
    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map(route => (
                <Link
                    // className={}
                    key={route.href}
                    href={route.href}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}