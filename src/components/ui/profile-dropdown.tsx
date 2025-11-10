import { useState, useRef, useEffect, RefObject, JSX } from "react";

import { motion } from "framer-motion";
import {
    User,
    Settings,
    CreditCard,
    Users,
    Clock,
    Headphones,
    MessageCircle,
    LogOut,
} from "lucide-react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useLogout } from "@/hooks/useAuth";
import { useUserContext } from "@/context";

type MenuItemProps = {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
};

export default function ProfileDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const { mutateAsync: logout, isPending } = useLogout();
    const { user } = useUserContext();

    const handleLogout = async () => {
        await logout();
    };

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left h-10" ref={ref}>
            <button onClick={() => setOpen(!open)} className="focus:outline-none">
                <UserCircleIcon className="w-10 h-10 text-blue-600" />
            </button>

            {open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 w-64 rounded-2xl bg-white shadow-xl border p-3 z-50"
                >
                    <div className="flex items-center gap-3 p-2 border-b pb-3">
                        <UserCircleIcon className="w-10 h-10 text-blue-600" />
                        <div className="text-sm">
                            <p className="font-semibold">{user?.first_name + " " + user?.last_name}</p>
                            <p className="text-gray-500 text-xs">{user?.email}</p>
                        </div>
                    </div>

                    <div className="space-y-1 py-2">
                        <MenuItem icon={<User size={16} />} label="View Profile" />
                        <MenuItem icon={<Settings size={16} />} label="Settings" />
                        <MenuItem icon={<CreditCard size={16} />} label="Subscription" />
                        <MenuItem icon={<Clock size={16} />} label="Changelog" />
                        <MenuItem icon={<Users size={16} />} label="Team" />
                        <MenuItem icon={<MessageCircle size={16} />} label="Community" />
                        <MenuItem icon={<Headphones size={16} />} label="Support" />
                    </div>

                    <div className="border-t pt-2 text-red-500" onClick={() => { handleLogout() }}>
                        <MenuItem icon={<LogOut size={16} />} label="Sign Out" />
                    </div>
                </motion.div>
            )}
        </div>
    );
}

function MenuItem({ icon, label, onClick }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center gap-3 text-left text-sm rounded-lg p-2 hover:bg-gray-100 transition"
        >
            {icon}
            {label}
        </button>
    );
}