
export default function NavigationBar() {

    return(
        <>
            <div>
                <nav>
                    <ul className="flex justify-left space-x-4 bg-blue-900 text-white p-4">
                        <li><a href="#" className="hover:text-blue-200">Home</a></li>
                        <li><a href="#" className="hover:text-blue-200">Products</a></li>
                        <li><a href="#" className="hover:text-blue-200">Orders</a></li>
                        <li><a href="#" className="hover:text-blue-200">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}