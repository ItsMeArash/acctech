import type React from "react"
import { useState } from "react"
import { IconCaretDown, IconClose } from "../../../components/shared/icons/icons"

interface FilterState {
  dateTime: {
    fromDate: string
    fromTime: string
    toDate: string
    toTime: string
  }
  orderNumber: string
  amount: {
    min: string
    max: string
  }
  orderStatus: string[]
}

interface FilterComponentProps {
  onApplyFilters?: (filters: FilterState) => void
  onClearFilters?: () => void
  initialFilters?: Partial<FilterState>
}

export default function FilterComponent({ onApplyFilters, onClearFilters, initialFilters = {} }: FilterComponentProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const [filters, setFilters] = useState<FilterState>({
    dateTime: {
      fromDate: "",
      fromTime: "",
      toDate: "",
      toTime: "",
    },
    orderNumber: "",
    amount: {
      min: "",
      max: "",
    },
    orderStatus: [],
    ...initialFilters,
  })

  const [expandedSections, setExpandedSections] = useState({
    dateTime: true,
    orderNumber: false,
    amount: false,
    orderStatus: false,
  })

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev)
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateFilter = (section: keyof FilterState, field: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleApplyFilters = () => {
    onApplyFilters?.(filters)
  }

  const handleClearFilters = () => {
    const clearedFilters: FilterState = {
      dateTime: {
        fromDate: "",
        fromTime: "",
        toDate: "",
        toTime: "",
      },
      orderNumber: "",
      amount: {
        min: "",
        max: "",
      },
      orderStatus: [],
    }
    setFilters(clearedFilters)
    onClearFilters?.()
  }


  return (
    <div className="bg-white dark:bg-[#2B2F3B] dark:text-white w-[280px] h-full max-w-sm border-l border-gray-200 dark:border-[#E9EAEB1F]">
      {/* Persistent Header - Always visible */}
      <div
        onClick={togglePanel}
        className="px-4 py-3 flex items-center justify-between cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">فیلترها</span>
        </div>
        <div className="transform transition-transform duration-300">
          {isPanelOpen ? <IconClose className="w-5 h-5 dark:invert" /> : <IconCaretDown className="dark:invert"/>}
        </div>
      </div>

      {/* Animated Filter Panel */}
      <div
        className={`transition-all duration-300 ease-in-out ${isPanelOpen ? "opacity-100 h-[calc(100%-125px)] overflow-aut border-t border-gray-200 dark:border-[#E9EAEB1F]" : "max-h-0 opacity-0"
          }`}
      >
        {/* Filter Sections */}
        <div className="min-h-full overflow-y-auto">
          {/* Date and Time Filter */}
          <FilterSection
            title="بر اساس تاریخ و ساعت"
            isExpanded={expandedSections.dateTime}
            onToggle={() => toggleSection("dateTime")}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-[#AEC3FF] mb-2 text-right">از تاریخ</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="۱۴۰۳/۰۵/۱۴"
                    value={filters.dateTime.fromDate}
                    onChange={(e) => updateFilter("dateTime", "fromDate", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-[#E9EAEB1F] text-sm placeholder:text-sm rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-[#AEC3FF] mb-2 text-right">تا تاریخ</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="۱۴۰۳/۰۵/۲۰"
                    value={filters.dateTime.toDate}
                    onChange={(e) => updateFilter("dateTime", "toDate", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-[#E9EAEB1F] text-sm placeholder:text-sm rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>
            </div>
          </FilterSection>

          {/* Order Number Filter */}
          <FilterSection
            title="بر اساس شماره سفارش"
            isExpanded={expandedSections.orderNumber}
            onToggle={() => toggleSection("orderNumber")}
          >
            <input
              type="text"
              placeholder="شماره سفارش را وارد کنید"
              value={filters.orderNumber}
              onChange={(e) => setFilters((prev) => ({ ...prev, orderNumber: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-[#E9EAEB1F] text-sm placeholder:text-sm rounded-md text-right focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </FilterSection>

          {/* Amount Filter */}
          <FilterSection
            title="بر اساس مبلغ"
            isExpanded={expandedSections.amount}
            onToggle={() => toggleSection("amount")}
          >
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 dark:text-[#EBEBEB] mb-1 text-right">حداقل مبلغ</label>
                <input
                  type="text"
                  placeholder="۰ تومان"
                  value={filters.amount.min}
                  onChange={(e) => updateFilter("amount", "min", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-[#E9EAEB1F] text-sm placeholder:text-sm rounded-md text-right focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-[#EBEBEB] mb-1 text-right">حداکثر مبلغ</label>
                <input
                  type="text"
                  placeholder="۱۰۰۰۰۰۰ تومان"
                  value={filters.amount.max}
                  onChange={(e) => updateFilter("amount", "max", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-[#E9EAEB1F] text-sm placeholder:text-sm rounded-md text-right focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
              </div>
            </div>
          </FilterSection>

          {/* Order Status Filter */}
          <FilterSection
            title="بر اساس وضعیت سفارش"
            isExpanded={expandedSections.orderStatus}
            onToggle={() => toggleSection("orderStatus")}
          >
            <div className="space-y-2">
              {["در انتظار پرداخت", "پرداخت شده", "در حال آماده‌سازی", "ارسال شده", "تحویل داده شده", "لغو شده"].map(
                (status) => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.orderStatus.includes(status)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters((prev) => ({
                            ...prev,
                            orderStatus: [...prev.orderStatus, status],
                          }))
                        } else {
                          setFilters((prev) => ({
                            ...prev,
                            orderStatus: prev.orderStatus.filter((s) => s !== status),
                          }))
                        }
                      }}
                      className="w-4 h-4 text-purple-600 border-gray-300 dark:border-[#E9EAEB1F] rounded focus:ring-[#1E3A8A]"
                    />
                    <span className="text-sm text-gray-70 dark:text-[#EBEBEB]">{status}</span>
                  </label>
                ),
              )}
            </div>
          </FilterSection>
        </div>

        {/* Action Buttons */}
        <div className="p-4 text-sm flex gap-3 bottom-0">
          <button
            onClick={handleClearFilters}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-[#E9EAEB1F] dark:text-[#D6D6D6] text-gray-700 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            حذف فیلترها
          </button>
          <button
            onClick={handleApplyFilters}
            className="flex-1 px-4 py-2 bg-[#1E3A8A] dark:bg-[#6589F0] text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            اعمال فیلترها
          </button>
        </div>
      </div>
    </div>
  )
}

const FilterSection = ({
  title,
  isExpanded,
  onToggle,
  children,
}: {
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
}) => (
  <div className="">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 px-4 text-right transition-colors duration-200"
    >
      <span className="text-gray-700 dark:text-[#EBEBEB] font-medium text-sm">{title}</span>
      <div className="flex items-center">
        <div className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}>
          <IconCaretDown className="text-gray-500 dark:invert" />
        </div>
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
    >
      <div
        className={`px-4 py-2 transform transition-transform duration-300 ${isExpanded ? "translate-y-0" : "-translate-y-2"
          }`}
      >
        {children}
      </div>
    </div>
  </div>
)