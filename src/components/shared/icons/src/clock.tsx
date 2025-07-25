import BaseIcon from "../base-icon";
import type {SvgIcon} from "../icon.types";

export default function SvgIcon(props: SvgIcon) {
    return (
        <BaseIcon {...props}>
            <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
        </BaseIcon>
    )
}