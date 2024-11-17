import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MyAccount from "./pages/myAccount";
import Shop from "./pages/Shop";


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
