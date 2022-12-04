import Header from "../components/headerClient"
import Footer from "../components/footerClient"
import Home from "../pages/Home"

import { Outlet } from "react-router-dom";

type Props = {};

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <Header/>
            <main>
                <Home />
            </main>
            <Footer/>
        </div>
    );
};

export default LayoutWebsite;
