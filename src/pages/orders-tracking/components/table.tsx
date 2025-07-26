import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Detail } from "./detail"
import { IconCaretDown } from "../../../components/shared/icons/icons"

interface Transaction {
  id: string
  status: string
  code: string
  amount: string
  date: string
  number: string
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    status: "تحویل شده",
    code: "۶۲۱۴۶۳۱۷",
    amount: "۱۰,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۳/۱/۱۲",
    number: "۱۳۷۸۶۷",
  },
  {
    id: "2",
    status: "در انتظار",
    code: "۶۲۱۴۶۳۱۸",
    amount: "۵,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۳/۱/۱۱",
    number: "۱۳۷۸۶۸",
  },
  {
    id: "3",
    status: "لغو شده",
    code: "۶۲۱۴۶۳۱۹",
    amount: "۲,۰۰۰,۰۰۰ تومان",
    date: "۱۴۰۳/۱/۱۰",
    number: "۱۳۷۸۶۹",
  }
]

export function Table() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تحویل شده":
        return "text-green-600 bg-green-50"
      case "در انتظار":
        return "text-yellow-600 bg-yellow-50"
      case "لغو شده":
        return "text-red-600 bg-red-50"
      case "در حال پردازش":
        return "text-blue-600 bg-blue-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="grow dark:bg-[#191D2A]">
      {/* Table Container with Fixed Height */}
      <div className="overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-[#4A4D57] sticky top-0 z-10">
            <tr className="text-right">
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center">شماره سفارش</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center">تاریخ سفارش</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center">مبلغ سفارش</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center">کد تحویل</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center">وضعیت سفارش</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider text-center w-12"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:divide-[#494C56]">
            {mockTransactions.map((transaction) => (
              <motion.tr key={transaction.id} layout>
                <motion.td layout colSpan={6} className="p-0">
                  <div className="dark:bg-[#3B3D49]">
                    {/* Main Row */}
                    <div
                      className="flex items-center px-4 py-4 dark:bg-[#3B3D49] hover:bg-gray-50 hover:dark:bg-[#34353F] cursor-pointer transition-colors"
                      onClick={() => toggleRow(transaction.id)}
                    >
                      <div className="flex-1 text-center">
                        <span className="text-sm text-gray-900 dark:text-white">{transaction.number}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-sm text-gray-900 dark:text-white">{transaction.date}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-sm text-gray-900 dark:text-white">{transaction.amount}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-sm text-gray-900 dark:text-white">{transaction.code}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <div className="w-12 flex justify-center">
                        <motion.div
                          animate={{ rotate: expandedRow === transaction.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconCaretDown className="dark:invert"/>
                        </motion.div>
                      </div>
                    </div>

                    {/* Expanded Detail */}
                    <AnimatePresence>
                      {expandedRow === transaction.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                            <Detail />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
