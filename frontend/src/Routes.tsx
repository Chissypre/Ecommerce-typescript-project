import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MyAccount from "./pages/myAccount";


const Routes = () => {
    return (
        <ReactRoutes>
            <Route
                path="/"
                element={
                    <Layout>
                        <MyAccount />
                    </Layout>
                }
            />
        </ReactRoutes>

    )
}

export default Routes
