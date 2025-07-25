import BaseIcon from "../base-icon";
import type {SvgIcon} from "../icon.types";

export default function SvgIcon(props: SvgIcon) {
    return (
        <BaseIcon {...props}>
            <path d="M5.33335 15.8334L4.16669 14.6667L8.83335 10L4.16669 5.33335L5.33335 4.16669L10 8.83335L14.6667 4.16669L15.8334 5.33335L11.1667 10L15.8334 14.6667L14.6667 15.8334L10 11.1667L5.33335 15.8334Z"/>
        </BaseIcon>
    )
}