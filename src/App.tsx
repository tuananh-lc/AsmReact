import { Route, Routes, Link } from "react-router-dom";
import Product from "./components/product";
import ProductAdd from "./components/product-add";
import ProductEdit from "./components/product-edit";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";
import PrivateLayout from "./layouts/PrivateLayout";
import Login from "./pages/login";
import './App.css';
import LayoutDetail from "./layouts/LayoutDetail";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<h1>Home Page</h1>} />
                    
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/detail/:id" element={<LayoutDetail/>} />
                <Route
                    path="/admin"
                    element={
                        <PrivateLayout>
                            <LayoutAdmin />
                        </PrivateLayout>
                    }
                >
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/update" element={<ProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
