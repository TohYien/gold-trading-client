import { useQuery } from "@tanstack/react-query";
import { Container, Accordion } from "react-bootstrap";
import { getOrders, getOrdersAdmin } from "../api/order";
import Orders from "../components/Orders";
import { isAdmin } from "../utils/authToken";    

const Order = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Order"],
    queryFn: isAdmin() ? getOrdersAdmin : getOrders,
  });

  console.log(data)
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <Container className="bg-white p-4 rounded shadow-sm">
        <Accordion className="my-5">
          {data.map((order) => (
            <Orders order={order} key={order._id} />
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default Order;
