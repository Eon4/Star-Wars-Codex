import { Outlet } from "react-router-dom";
// import { Navigation } from '../Components/Navigation'
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";


export const MainLayout = () => {
    return(
        <main>
                  <Header />

            {/* <Navigation/> */}
            <Outlet/>
            <Footer/>
        </main>
    )
}