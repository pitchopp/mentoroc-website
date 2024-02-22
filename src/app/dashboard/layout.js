import { FaHome, FaDatabase } from "react-icons/fa";
import { FaGear, FaPowerOff } from "react-icons/fa6";
import Link from "next/link";


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
        <nav className={`shadow-2xl h-screen p-6 z-50 ${className}`} {...props}>
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
