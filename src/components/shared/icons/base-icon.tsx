import React from 'react'
import type { SvgIcon } from './icon.types'

const BaseIcon: React.FC<SvgIcon> = ({
  color = 'currentColor',
  width = 24,
  height = 24,
  strokeWidth = '1.5',
  viewBox = '0 0 24 24',
  children,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      {...rest}
    >
      {children}
    </svg>
  )
}

export default BaseIcon
