export function TableRowDetail() {
    const productDetails = [
        { name: "باتری اوریجینال", code: "۷۴۳۷۴۳", quantity: "۴۲" },
        { name: "باتری سولار", code: "۳۲۴۳۷۴۸", quantity: "۱۷" },
        { name: "باتری اتمیک", code: "۸۶۰۳۸۶۰", quantity: "۱۱" },
    ]

    const vehicleDetails = [{ code: "۸۷۶۸۳۴۰۶", brand: "بنز", type: "تریلر", plate: "۲۱ ج ۵۸۳ ایران ۲۵" }]

    const driverDetails = [{ firstName: "مسعود", lastName: "حسینی", phone: "۰۹۱۲۳۴۵۶۷۸۹" }]

    return (
        <div className="space-y-2 bg-[#EBEBEB] dark:bg-[#191D2A] py-2">
            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA] dark:bg-[#4A4D57]">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">نام کالا</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">کد کالا</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">تعداد</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-[#494C56] dark:bg-[#3B3D49]">
                        {productDetails.map((product, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA] hover:dark:bg-[#34353F]">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{product.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{product.code}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA] dark:bg-[#4A4D57]">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">کد خودرو</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">برند</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">نوع خودرو</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">پلاک</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-[#494C56] dark:bg-[#3B3D49]">
                        {vehicleDetails.map((vehicle, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA] hover:dark:bg-[#34353F]">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{vehicle.code}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">
                                    <span className="bg-gray-200 dark:bg-[#666666] dark:text-white px-2 rounded-xl">{vehicle.brand}</span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{vehicle.type}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{vehicle.plate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA] dark:bg-[#4A4D57]">
                        <tr>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">نام راننده</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">نام خانوادگی راننده</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-white">شماره تماس</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-[#494C56] dark:bg-[#3B3D49]">
                        {driverDetails.map((driver, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA] hover:dark:bg-[#34353F]">
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{driver.firstName}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">{driver.lastName}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 dark:text-[#EBEBEB] text-center">
                                    <button className="w-3/5 text-white cursor-pointer bg-[#8F8F8F] px-4 py-3 rounded-lg">
                                        تماس با راننده
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4">
                <button
                    className="w-full bg-[#1E3A8A] dark:bg-[#6589F0] cursor-pointer text-white py-3 rounded-lg flex items-center justify-center gap-2"
                    onClick={() => console.log("ثبت بازخورد")}
                >
                    ثبت بازخورد
                </button>
            </div>
        </div>
    )
}
