import { IconAvatar, IconClock } from "../shared/icons/icons";

export default function HeaderActions() {
    return (
        <div className="flex gap-2">
            <div className="bg-[#F0F4FF] flex items-center gap-2 px-3 py-2 rounded-[30px] text-sm">
                <IconClock stroke="#1E3A8A" fill="none"/>
                <p className="text-[#1E3A8A]">۱۱:۴۲ ، شنبه ۲۵ اسفند</p>
            </div>
            <div className="border-2 border-[#666666] text-[#3D3D3D] flex items-center gap-2 px-3 py-2 rounded-[30px] text-sm">
                <IconAvatar stroke="#fff" strokeWidth={1} fill="#666666"/>
                <p className="">آخرین لاگین : ۴ ساعت قبل</p>
            </div>
        </div>
    )
}