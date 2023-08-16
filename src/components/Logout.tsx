import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import axios from "axios";
import { removeAuthUser } from "../store/features/userSlice";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    const data = await (await axios.post("/logout")).data;
    console.log(data);
    dispatch(removeAuthUser());
    setTimeout(() => navigate("/"), 5000);
  }

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <Container fluid className="appContainer">
      <h1>
        You have successfully logged out. You are now being redirected to the
        home page. Thank you for using my app!
      </h1>
    </Container>
  );
}

export default Logout;
