import { IconClose } from "../../../components/shared/icons/icons";

export default function ActiveTabs() {
    return (
        <div className="bg-[#F0F4FF] dark:bg-[#3E414C] px-5 py-3 h-[60px]">
            <div className="flex justify-between text-sm items-center gap-2 w-fit text-white border border-[#1E3A8A] bg-[#8CAAFF] px-2 py-1.5 rounded-lg">
                پیگیری سفارشات
                <IconClose stroke="none" fill="#fff"/>
            </div>
        </div>
    )
}