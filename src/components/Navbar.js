import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import GuestLinks from "./GuestLinks";
import AdminLinks from "./AdminLinks";
import UserLinks from "./UserLinks";
import { redirect } from "react-router-dom";
import { clearToken, isAdmin } from "../utils/authToken";
import { useNavigate } from "react-router-dom";

const TopNav = ({ data: { token, setToken } }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    clearToken();
    setToken(null);
    navigate("/");
    return redirect("/login");
  };

  return (
    <Navbar bg="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-uppercase text-white"
        >
          Gold & Silver Trading
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav" className="border-0" />
        <Navbar.Collapse id="basic-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            {!token && <GuestLinks />}
            {token && !isAdmin() && <UserLinks />}
            {token && isAdmin() && <AdminLinks />}
            {token && (
              <Nav.Link
                as={Link}
                onClick={() => {
                  logoutHandler();
                  window.location.href = "/";
                }}
                className="text-danger fw-bold"
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
