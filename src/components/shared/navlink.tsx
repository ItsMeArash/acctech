import React, { type ReactNode } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

interface NavLinkProps {
  to: string
  icon: ReactNode
  label: string
  isCollapsed: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  icon,
  label,
  isCollapsed,
}) => {
  return (
    <li>
      {isCollapsed ? (
          <RouterNavLink to={to} className="w-full inline-flex justify-center">
            {({ isActive }) => (
              <div
                className={`rounded-xl flex items-center justify-center p-2 ${
                  isActive
                    ? 'bg-[#FAFAFA] text-gray-900 w-full'
                    : 'text-gray-800/95  w-full'
                }`}
              >
                {icon}
              </div>
            )}
          </RouterNavLink>
      ) : (
        <RouterNavLink
          to={to}
          className={({ isActive }: { isActive: boolean }) =>
            `w-full inline-flex justify-start ${
              isActive
                ? 'text-gray-900'
                : 'text-gray-800/95 rounded-xl hover:bg-gray-200/90'
            }`
          }
        >
          {({ isActive }) => (
            <div
              className={`flex items-center p-4 rounded-xl active:outline-none justify-start gap-4 h-[57px] text-base font-medium ${
                isActive
                  ? 'bg-[#FAFAFA] dark:bg-transparent dark:text-[#6589F0] font-bold w-full'
                  : 'text-gray-800/95 dark:text-white hover:brightness-10 w-full'
              }`}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          )}
        </RouterNavLink>
      )}
    </li>
  )
}
