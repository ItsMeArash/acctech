import { useState } from "react";
import ActiveTabs from "./components/active-tabs";
import FilterComponent from "./components/filters";

export default function OrdersTracking() {
    const [appliedFilters, setAppliedFilters] = useState<any>(null)

    const handleApplyFilters = (filters: any) => {
        setAppliedFilters(filters)
        console.log("Applied filters:", filters)
        // اینجا می‌تونید فیلترها رو به API ارسال کنید
    }

    const handleClearFilters = () => {
        setAppliedFilters(null)
        console.log("Filters cleared")
    }


    return (
        <main className="h-full">
            <ActiveTabs />
            <section className="h-[calc(100%-60px)]">
                <FilterComponent onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />
            </section>
        </main>
    )
}

