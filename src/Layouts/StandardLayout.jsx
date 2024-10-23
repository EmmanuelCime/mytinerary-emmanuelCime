import NavBar from "../Components/NavBar.jsx"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer.jsx"
import Sidebar from "../Components/Sidebar.jsx"

function StandardLayout() {

    return (
        <>
            <header>
                <Sidebar></Sidebar>
                <NavBar></NavBar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )

}

export default StandardLayout