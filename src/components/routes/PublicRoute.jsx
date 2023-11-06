import { Navigate } from "react-router-dom";

const PublicRoute = ({ Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user");
  return (
    <>
      {!!isAuthenticated === false ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/admin" replace />
      )}
    </>
  );
};

export default PublicRoute;
