import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
    children,

}) {
    return <section>
        <div className="layout">
            <Sidebar />
            <div className="children">
                <Navbar />
                {children}
                <BottomBanner/>
                <Footer />
            </div>
        </div>
    </section>
}