import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserLinks = () => {
	return (
		<>
			<Nav.Link as={Link} className="text-white" to="/product">Products</Nav.Link>
			<Nav.Link as={Link} className="text-white" to="/cart">Cart</Nav.Link>
			<Nav.Link as={Link} className="text-white" to="/orders">Orders</Nav.Link>
		</>
	);
};

export default UserLinks;
