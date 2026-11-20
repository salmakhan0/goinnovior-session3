import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


export default function MainLayout() {
    return (
            <div className="min-h-screen bg-[080808] text-white">
                <Navbar />

                <main><Outlet /></main>
               <Footer/>
        </div>
    )
}