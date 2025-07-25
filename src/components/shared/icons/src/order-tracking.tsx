import React from "react";
import BaseIcon from "../base-icon";
import type {SvgIcon} from "../icon.types";

export default function SvgIcon(props: SvgIcon) {
    return (
        <BaseIcon {...props}>
            <path d="M14.1666 3.33334H5.83329C4.91282 3.33334 4.16663 4.07954 4.16663 5.00001V15.8333C4.16663 16.7538 4.91282 17.5 5.83329 17.5H14.1666C15.0871 17.5 15.8333 16.7538 15.8333 15.8333V5.00001C15.8333 4.07954 15.0871 3.33334 14.1666 3.33334Z"/><path d="M7.5 7.5H12.5M7.5 10.8333H12.5M7.5 14.1667H10.8333"/>
        </BaseIcon>
    )
}