import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminLinks = () => {
	return (
		<>
			<Nav.Link as={Link} to="/product"  className="text-white">Products</Nav.Link>
			<Nav.Link as={Link} className="text-white" to="/orders">Orders</Nav.Link>
		</>
	);
};

export default AdminLinks;
