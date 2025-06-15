
export default function Sidebar() {

    // This component renders a sidebar for the admin dashboard
    return(
        <div className="rounded-lg w-150 bg-blue-500 text-white p-6">
            <h1 className="flex items-center text-sm/25 font-bold mb-20 w-150 ">Tindahan ni Dodong</h1>
            <nav>
                <ul>
                    <div className="flex items-start flex-col space-y-4">
                    <li><a href="#" className="text-[30px] hover:text-black">Dashboard</a></li>
                    <li><a href="#" className="text-[30px] hover:text-black">Products</a></li>
                    <li><a href="#" className="text-[30px] hover:text-black">Orders</a></li>
                    <li><a href="#" className="text-[30px] hover:text-black">Logout</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}