import { Outlet } from "react-router-dom";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";
import { Navigation } from "../Components/nav";

export const MainLayout = () => {
    return(

        <main>
      <Navigation />
            <Header />
            <Outlet/>
            <Footer/>
        </main>
    )
}