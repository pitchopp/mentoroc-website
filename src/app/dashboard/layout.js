import { FaHome, FaDatabase } from "react-icons/fa";
import { FaGear, FaPowerOff } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.png";


const SidebarGroup = ({ children, title }) => {
    return (
        <ul className="flex flex-col gap-4 my-4 text-sk">
            {title && <h2 className="text-gray-500 text-base font-light">{title}</h2>}
            {children}
        </ul>
    );
};

const SidebarItem = ({ children, icon, href }) => {
    return (
        <li className="my-2 hover:translate-x-1 transition ease-in-out duration-300">
            <Link href={href} className="flex gap-2 items-center">
                {icon && icon()}
                {children}
            </Link>
        </li>
    );
};


export function Sidebar({ className, ...props }) {
    return (
        <nav className={`shadow-xl h-screen w-52 p-6 z-50 ${className}`} {...props}>
            <Link href="/">
                <div className="w-32 mx-auto h-32">
                    <Image src={logo} alt="Logo" className="object-cover" />
                </div>
                <h1 className="text-xl text-center mx-auto my-4 font-bold uppercase">Mentoroc</h1>
            </Link>
            <SidebarGroup title="Accueil">
                <SidebarItem href="/dashboard" icon={FaHome}>
                    Dashboard
                </SidebarItem>
            </SidebarGroup>
            <SidebarGroup title="Gestion">
                <SidebarItem href="/admin" icon={FaDatabase}>
                    Admin
                </SidebarItem>
                <SidebarItem href="/dashboard/settings" icon={FaGear}>
                    Settings
                </SidebarItem>
                <SidebarItem href="/logout" icon={FaPowerOff}>
                    Déconnexion
                </SidebarItem>
            </SidebarGroup>
        </nav>
    );
};

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    );
};
