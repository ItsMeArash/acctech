import { IconCaretDown } from "../shared/icons/icons";

export default function ProfileInfo() {
    return (
        <div className="flex gap-2 items-center">
            <img src="/assets/images/user-image.png" alt="" className="w-12 h-12 rounded-full object-cover"/>
            <div>
                <p className="text-center font-semibold">مهدی دارابی</p>
                <p className="bg-[#192A3E14] rounded-xl px-2 mt-2 text-xs">09123456789</p>
            </div>
            <IconCaretDown />
        </div>
    )
}