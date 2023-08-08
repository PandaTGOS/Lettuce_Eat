import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="fixed bg-white dark:bg-green-700 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-green-700 margin-auto">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src="https://img.lovepik.com/free_png/33/47/67/20r58PICpatc58PIC58PICWgdfSJ0_PIC2018.png_860.png" className="h-10 mr-3 rounded-3xl" alt="Logo"/>
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">LettuceEat</span>
                </Link>
                <div className="items-baseline justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-green-700 dark:border-gray-700">
                    <li>
                        <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cart</Link>
                    </li>
                    <li>
                        <Link to="/signin" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-1 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;