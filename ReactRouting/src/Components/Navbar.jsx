import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo/Brand */}
                    <div className='flex-shrink-0'>
                        <h1 className='text-2xl font-bold text-white cursor-pointer hover:text-blue-200 transition-colors'>
                            React Routes
                        </h1>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className='flex items-center space-x-1'>
                        <NavLink 
                            to="/Home" 
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-white text-blue-700 shadow-md' 
                                        : 'hover:bg-blue-600 hover:shadow-sm'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/About"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-white text-blue-700 shadow-md' 
                                        : 'hover:bg-blue-600 hover:shadow-sm'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/Course"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-white text-blue-700 shadow-md' 
                                        : 'hover:bg-blue-600 hover:shadow-sm'
                                }`
                            }
                        >
                            Course
                        </NavLink>
                        <NavLink 
                            to="/Product"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-white text-blue-700 shadow-md' 
                                        : 'hover:bg-blue-600 hover:shadow-sm'
                                }`
                            }
                        >
                            Product
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar