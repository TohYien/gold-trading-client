import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const GuestLinks = () => {
    return (
        <>
            <Nav.Link to="/register" className="text-white" as={Link}>
				Register
			</Nav.Link>
			<Nav.Link to="/login" className="text-white" as={Link}>
				Login
			</Nav.Link>
        </>

    );
}

export default GuestLinks;