import { useState } from "react"
import { Modal } from "../../../components/shared/modal"

interface FeedbackModalProps {
    isOpen: boolean
    onClose: () => void
    consultantId?: string
}

export function FeedbackModal({ isOpen, onClose, consultantId = "۱۳۸۷۶۷" }: FeedbackModalProps) {
    const [feedback, setFeedback] = useState("")

    const handleSubmit = () => {
        if (feedback.trim()) {
            console.log("Feedback submitted:", feedback)
            setFeedback("")
            onClose()
        }
    }

    const handleCancel = () => {
        setFeedback("")
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-4 w-[400px] sm:w-[700px]">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    ثبت بازخورد برای سفارش {consultantId}
                </h2>

                <div>
                    <label className="block mb-2 dark:text-white">نظر شما</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="اینجا بنویسید..."
                        className="w-full h-32 p-4 text-sm border border-gray-200 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-[#3B3D49] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        dir="rtl"
                    />
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        onClick={handleCancel}
                        className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-none cursor-pointer dark:bg-[#4A4D57] rounded-lg hover:bg-gray-200 dark:hover:bg-[#5A5D67] transition-colors"
                    >
                        انصراف
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!feedback.trim()}
                        className="flex-1 px-4 py-3 text-sm cursor-pointer font-medium text-white bg-[#1E3A8A] dark:bg-[#6589F0] rounded-lg hover:bg-[#1E40AF] dark:hover:bg-[#5B7FE8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        ثبت بازخورد
                    </button>
                </div>
            </div>
        </Modal>
    )
}
