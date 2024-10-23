import Footer from "../Components/Footer.jsx"
import { Outlet } from "react-router-dom"




function DetailsLayout() {

    return (
        <>
            <main>
                <h1>Details</h1>
                <Outlet></Outlet>
            </main>


            <footer>
                <Footer></Footer>
            </footer>
        </>
    )

}


export default DetailsLayout