import { Navigate } from "react-router";
import { useAuth } from "../context/authContext";
import Loading from "./Loading";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <Loading />
    );
  if (!user) return <Navigate to="/sign-in" />;

  return <>{children}</>;
}
