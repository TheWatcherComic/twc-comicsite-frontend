import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";


export function ProtectedRoute({children}) {
    const {user, loading} =  useAuth();

    if(loading) return <h1 class="dark:text-white">Loading</h1>
    if(!user) return <Navigate to='/sign-in' />

    return <>{children}</>
}