import Logo from './image/Logo.jpg'

function TopMenu() {
    const menuStyles = {
        color: "#000",
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",

    };
    return (
        <div className="ml-auto mt-10">
            <nav className="md:flex md:items-center md:w-auto md:text-center md:w-full md:flex-grow">
                <div className="flex justify-between items-center w-full">
                    <div style={{ width: "163px", height: "55px", flexShrink: 0 }}>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className="hidden md:flex space-x-4">

                        <a href="/" className="text-blue-500 hover:bg-blue-200" style={menuStyles}>
                            Element 1
                        </a>
                        <a href="/" className="text-blue-500 hover:bg-blue-200" style={menuStyles}>
                            Element 2
                        </a>
                        <a href="/" className="text-blue-500 hover:bg-blue-200" style={menuStyles}>
                            Element 3
                        </a>
                        <a href="/" className="text-blue-500 hover:bg-blue-200" style={menuStyles}>
                            Element 4
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopMenu;