import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MyAccount from "./pages/myAccount";
import Shop from "./pages/Shop";
import AddMyProduct from "./pages/myProduct";



const Routes = () => {
    return (
        <ReactRoutes>
            <Route
                path="/"
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
        </ReactRoutes>

    )
}

export default Routes
