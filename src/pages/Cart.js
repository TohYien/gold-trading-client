import { useMutation, useQuery } from "@tanstack/react-query";
import { Container, Row } from "react-bootstrap";
import { getCarts, deleteCart,checkoutCart } from "../api/carts";
import { useNavigate } from "react-router-dom";
import MyCart from "../components/MyCart.js";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
 
const Cart = () => {
    const navigate = useNavigate();
    const { mutate: deleteMutate } = useMutation({ mutationFn: deleteCart });
    const { mutate: checkoutMutate } = useMutation({ mutationFn: checkoutCart});

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: getCarts,
    });

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error...</h2>;

    const token = Cookies.get("authToken")
    const userId = token? jwtDecode(token)?.data._id : null
    
    const handleDeleteCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are going to delete the whole cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMutate({
                    onSuccess: (data) => {
                        alert(data.msg);
                    },
                    onError: (error) => alert(error.response.data.msg),
                });
            }
        });
    };


    const handleCheckOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are going to checkout the whole cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, checkout it!",
        }).then((result) => {
            if (result.isConfirmed) {
                checkoutMutate(
                    {userId},
                    {
                        onSuccess: (data) => {
                        alert(data.msg);
                        navigate("/order");
                    },
                    onError: (error) => alert(error.response.data.msg),
                });
            }
        });
    };

   

    return (
        <Container>
            <Row className="justify-content-center my-5">
                {data?.length > 0 ? (
                    <>
                        <table className="table table-primary table-striped-columns">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th class="text-center">Grams</th>
                                    <th>Subtotal</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <MyCart item={item} key={item._id} refetch={refetch} />
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <button className="btn btn-danger" onClick={() => handleDeleteCart()}>
                                Empty Cart
                            </button>
                            <button className="btn btn-primary" onClick={() => handleCheckOut()}>
                                Checkout
                            </button>
                        </div>
                    </>
                ) : (
                    <h2>Your cart is empty</h2>
                )}
            </Row>
        </Container>
    );
};

export default Cart;
