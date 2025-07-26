import HeaderActions from "../components/header/header-actions"
import ProfileInfo from "../components/header/profile-info"
import { IconMessage, IconMoon, IconNotification } from "../components/shared/icons/icons"
import useIsMobile from "../hooks/useIsMobile"

export default function Header() {
    const isMobile = useIsMobile()

    return (
        <header className="flex justify-between w-full p-5">
            {!isMobile && <ProfileInfo />}
            <div className="flex gap-4 items-center max-sm:justify-between max-sm:grow">
                <HeaderActions />
                <ul className="flex gap-2">
                    <li >
                        <button className="p-2 bg-[#F8F8F8] rounded-xl"><IconMoon /></button>
                    </li>
                    <li >
                        <button className="p-2 bg-[#F8F8F8] rounded-xl"><IconNotification stroke="#000" fill="none" /></button>
                    </li>
                    <li >
                        <button className="p-2 bg-[#F8F8F8] rounded-xl"><IconMessage stroke="#000" fill="none" /></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
