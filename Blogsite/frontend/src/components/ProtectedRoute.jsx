import { Navigate } from "react-router-dom";

const isLoggedIn = false;

const ProtectedRoute = ({children}) => {
    if(!isLoggedIn) {
        return <Navigate to="/signin"/>;
    }

    return children;
};

export default ProtectedRoute;