import React, { useState } from "react";

interface NavbarProps { }

function Navbar(props: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuStyles = {
        color: "#000",
        fontFamily: "Inter",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginBottom: "10px",
        marginTop: '10px'
    };

    const navStyles = {
        border: isOpen ? 'none' : ' 1px solid #4392C4',
        borderBottom: 'none',
        maxWidth: '970px',
        justifyContent: 'space-between',
    };

    return (
        <div className="mt-10">
            <button
                onClick={toggleMenu}
                className="text-blue-500 hover:text-red-200 md:hidden"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <nav style={navStyles}
                className={`${isOpen ? "block" : "hidden"
                    } md:flex  md:items-center md:w-auto md:text-center md:w-full md:flex-grow justify-end ml-auto md:mr-0`}

            >
                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

                <a
                    href="/"
                    className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-blue-200"
                    style={menuStyles}
                >
                    Lorem Ipsum
                </a>

            </nav>
        </div>
    );
}

export default Navbar;
