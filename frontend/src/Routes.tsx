import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MyAccount from "./pages/myAccount";
import Shop from "./pages/Shop";
import AddMyProduct from "./pages/myProduct";
import ShopListDetail from "./components/ShopListItems/ShopListDetail";
import { Home } from "./pages/Home";
import EditProduct from "./pages/EditProduct";



const Routes = () => {
    return (
        <ReactRoutes>
            <Route
                path="/"
                element={
                    <Layout heroTitle="Home">
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/sign-In"
                element={
                    <Layout heroTitle="My Account">
                        <MyAccount />
                    </Layout>
                }
            />
            <Route
                path="/admin"
                element={
                    <Layout heroTitle="Admin">
                        <AddMyProduct />
                    </Layout>
                }
            />
            <Route
                path="/shop"
                element={
                    <Layout heroTitle="Shop">
                        <Shop />
                    </Layout>
                }
            />
            <Route path="/shop/:productId" element={
                <Layout heroTitle="Shop">
                    <ShopListDetail />
                </Layout>
            } />
            <Route
                path="/edit-product/:productId"
                element={
                    <Layout heroTitle="Edit Product">
                        <EditProduct />
                    </Layout>
                }
            />
        </ReactRoutes>

    )
}

export default Routes
