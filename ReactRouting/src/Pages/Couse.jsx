import { Link } from 'react-router-dom'

const Course = () => {
    const courses = [
        { id: 1, title: 'React Fundamentals' },
        { id: 2, title: 'Advanced JavaScript' },
        { id: 3, title: 'Node.js Backend Development' }
    ]

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Available Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <Link
                            key={course.id}
                            to={`/Course/${course.id}`}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 hover:scale-105 transform"
                        >
                            <h2 className="text-2xl font-bold text-blue-700 mb-4">{course.title}</h2>
                            <p className="text-gray-600 mb-4">Click to view course details</p>
                            <span className="text-blue-600 font-medium hover:text-blue-800">
                                View Details →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course

