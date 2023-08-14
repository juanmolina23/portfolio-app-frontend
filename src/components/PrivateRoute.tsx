import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/store";

type ProtectedRouteProps = {
  component: JSX.Element;
};

function PrivateRoute({ component }: ProtectedRouteProps) {
  const currentUser = useAppSelector((state) => state.user.user);

  if (currentUser.username != "") {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
