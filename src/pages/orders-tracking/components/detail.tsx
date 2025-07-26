export function Detail() {
    const productDetails = [
        { name: "باتری اوریجینال", code: "۷۴۳۷۴۳", quantity: "۴۲" },
        { name: "باتری سولار", code: "۳۲۴۳۷۴۸", quantity: "۱۷" },
        { name: "باتری اتمیک", code: "۸۶۰۳۸۶۰", quantity: "۱۱" },
    ]

    const vehicleDetails = [{ code: "۸۷۶۸۳۴۰۶", brand: "بنز", type: "تریلر", plate: "۲۱ ج ۵۸۳ ایران ۲۵" }]

    const driverDetails = [{ firstName: "مسعود", lastName: "حسینی", phone: "۰۹۱۲۳۴۵۶۷۸۹" }]

    return (
        <div className="space-y-2 bg-[#EBEBEB] py-2">
            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA]">
                        <tr className="">
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">نام کالا</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">کد کالا</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">تعداد</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {productDetails.map((product, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA]">
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{product.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{product.code}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA]">
                        <tr className="">
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">کد خودرو</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">برند</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">نوع خودرو</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">پلاک</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {vehicleDetails.map((vehicle, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA]">
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{vehicle.code}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">
                                    <span className="bg-gray-200 px-2 rounded-xl">{vehicle.brand}</span>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{vehicle.type}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{vehicle.plate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#FAFAFA]">
                        <tr className="">
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">نام راننده</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">نام خانوادگی راننده</th>
                            <th className="px-4 py-3 text-sm font-medium text-gray-700">شماره تماس</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {driverDetails.map((driver, index) => (
                            <tr key={index} className="hover:bg-[#FAFAFA]">
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{driver.firstName}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">{driver.lastName}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 text-center">
                                    <button className="w-3/4 text-white cursor-pointer bg-[#8F8F8F] px-4 py-3 rounded-lg">
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
                    className="w-full bg-[#1E3A8A] cursor-pointer text-white py-3 rounded-lg flex items-center justify-center gap-2"
                    onClick={() => console.log("ثبت بازخورد")}
                >
                    ثبت بازخورد
                </button>
            </div>
        </div>
    )
}
