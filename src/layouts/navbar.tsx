import { useState } from "react"
import { sidebarVariants } from "../config/constants"
import * as motion from "motion/react-client"
import { NavLink } from "../components/shared/navlink"
import { IconClose, IconOrderTracking } from "../components/shared/icons/icons"

export function DesktopNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <motion.aside
      className="bg-[#FFFFFF] dark:bg-[#2B2F3B] border-l border-gray-200/90 dark:border-[#525252] py-6 overflow-hidden"
      initial="expanded"
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="divide-y divide-gray-300/80 dark:divide-none h-full flex flex-col">
        <div
          className={`flex items-center pb-4 px-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}
        >
          {!isCollapsed && (<div className="flex gap-2 items-center">
              <motion.img
                src="/assets/images/logo.png"
                alt="site logo"
                className="w-10 h-10 dark:filter dark:invert dark:brightness-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            <p className="text-sm dark:text-[#EBEBEB] font-bold">نام شرکت یا مجموعه</p>
          </div>)}
          <button
            className="rounded-full hover:bg-gray-200/90"
            onClick={toggleSidebar}
          >
            <IconClose className="dark:invert"/>
          </button>
        </div>
        <nav className="pt-4 flex-1">
          <motion.ul
            className={`space-y-2 px-2`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
          >
            {[{ path: "/orders-tracking", icon: <IconOrderTracking fill="none" stroke="currentColor"/>, label: "پیگیری سفارشات" }].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  icon={item.icon}
                  label={item.label}
                  isCollapsed={isCollapsed}
                />
              </motion.div>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.aside>
  )
}

export function MobileNavbar() {
  return (
    <div>
      <h1>MobileNavbar</h1>
    </div>
  )
}