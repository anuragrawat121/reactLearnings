import { useNavigate } from 'react-router-dom'

const PrevButton = ({ to, disabled = false, className = '' }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (to) {
            navigate(to)
        } else {
            navigate(-1)
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`flex items-center px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
        </button>
    )
}

export default PrevButton

