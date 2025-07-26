import BaseIcon from "../base-icon";
import type {SvgIcon} from "../icon.types";

export default function SvgIcon(props: SvgIcon) {
    return (
        <BaseIcon {...props}>
            <path d="M3 12H21M3 6H21M3 18H21"/>
        </BaseIcon>
    )
}