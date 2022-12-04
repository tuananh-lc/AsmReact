import Header from "../components/headerClient"
import Footer from "../components/footerClient"
import Detail from "../pages/Detail"

import { Outlet } from "react-router-dom";

type Props = {};

const LayoutDetail = (props: Props) => {
    
    return (
        <div>
            <Header/>
            <main>
                <Detail />
            </main>
            <Footer/>
        </div>
    );
};

export default LayoutDetail;
