import { useParams, Link } from 'react-router-dom'

const CourseDetails = () => {
    const { id } = useParams()

    // Sample course data - in a real app, this would come from an API
    const courses = {
        '1': {
            title: 'React Fundamentals',
            description: 'Learn the basics of React including components, props, and state management.',
            duration: '8 weeks',
            instructor: 'John Doe',
            price: '$99'
        },
        '2': {
            title: 'Advanced JavaScript',
            description: 'Master advanced JavaScript concepts including closures, promises, and async/await.',
            duration: '6 weeks',
            instructor: 'Jane Smith',
            price: '$149'
        },
        '3': {
            title: 'Node.js Backend Development',
            description: 'Build scalable backend applications using Node.js and Express.',
            duration: '10 weeks',
            instructor: 'Mike Johnson',
            price: '$199'
        }
    }

    const course = courses[id] || {
        title: 'Course Not Found',
        description: 'The course you are looking for does not exist.',
        duration: 'N/A',
        instructor: 'N/A',
        price: 'N/A'
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link 
                    to="/Course"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-6 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Courses
                </Link>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-6">
                        <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
                        <p className="text-blue-200">Course ID: {id}</p>
                    </div>
                    
                    <div className="px-8 py-6">
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            {course.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">Duration</h3>
                                <p className="text-2xl font-bold text-blue-700">{course.duration}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">Instructor</h3>
                                <p className="text-xl font-bold text-blue-700">{course.instructor}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">Price</h3>
                                <p className="text-2xl font-bold text-blue-700">{course.price}</p>
                            </div>
                        </div>
                        
                        <div className="flex space-x-4">
                            <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md">
                                Enroll Now
                            </button>
                            <button className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails

