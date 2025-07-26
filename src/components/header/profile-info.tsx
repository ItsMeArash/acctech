import { IconCaretDown } from "../shared/icons/icons";

export default function ProfileInfo() {
    return (
        <div className="flex gap-2 items-center">
            <img src="/assets/images/user-image.png" alt="" className="w-12 h-12 rounded-full object-cover"/>
            <div>
                <p className="text-center font-semibold dark:text-white">مهدی دارابی</p>
                <p className="bg-[#192A3E14] dark:bg-[#D6D6D6] text-[#192A3E] dark:text-[#525252] rounded-xl py-1 px-2 mt-2 text-xs rounded-[12px]">09123456789</p>
            </div>
            <IconCaretDown className="dark:invert"/>
        </div>
    )
}