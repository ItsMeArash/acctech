import HeaderActions from "../components/header/header-actions"
import ProfileInfo from "../components/header/profile-info"
import { IconMessage, IconMoon, IconNotification } from "../components/shared/icons/icons"
import useIsMobile from "../hooks/useIsMobile"

export default function Header() {
    const isMobile = useIsMobile()
    const toggleDarkMode = () => {
        const root = window.document.documentElement
        const current = root.classList.contains("dark")
    
        if (current) {
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    }
    return (
        <header className="flex justify-between w-full p-5 dark:bg-[#2B2F3B]">
            {!isMobile && <ProfileInfo />}
            <div className="flex gap-4 items-center max-sm:justify-between max-sm:grow">
                <HeaderActions />
                <ul className="flex gap-2">
                    <li onClick={toggleDarkMode}>
                        <button className="p-2 bg-[#F8F8F8] dark:bg-[#191D2A] rounded-xl"><IconMoon  className="dark:invert"/></button>
                    </li>
                    <li >
                        <button className="p-2 bg-[#F8F8F8] dark:bg-[#191D2A] rounded-xl"><IconNotification className="dark:invert" stroke="#000" fill="none" /></button>
                    </li>
                    <li >
                        <button className="p-2 bg-[#F8F8F8] dark:bg-[#191D2A] rounded-xl"><IconMessage className="dark:invert" stroke="#000" fill="none" /></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
