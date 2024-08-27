import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchGold } from "../api/gold";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Image, Modal, Form } from "react-bootstrap";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import { addToCart } from "../api/carts";

function Product() {
  const [showGoldForm, setShowGoldForm] = useState(false);
  const [showSilverForm, setShowSilverForm] = useState(false);
  const [GoldformType, setGoldFormType] = useState(""); // "buy" or "sell"
  const [SilverformType, setSilverFormType] = useState(""); // "buy" or "sell"
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState();

  const [color] = React.useState("#4e79a7");

  const chartsParams = {
    margin: { bottom: 20, left: 25, right: 5 },
    height: 300,
  };

  //GOLD

  const { data, isLoading, error } = useQuery({
    queryKey: ["gold"],
    queryFn: fetchGold,
  });

  const handleFormOpenGold = (type) => {
    setGoldFormType(type);
    setShowGoldForm(true);
    setAmount("");
    setPrice(data.rates.USDXAU.toFixed(2));
  };

  const handleFormCloseGold = () => {
    setShowGoldForm(false);
    setAmount("");
  };

  const handleInputChangeGold = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmitGold = async () => {
    await addToCart(
      "Gold",
      price,
      amount,
      "9999 gold",
      GoldformType || SilverformType
    );
    handleFormCloseGold();
  };

  //SILVER

  const handleFormOpenSilver = (type) => {
    setSilverFormType(type);
    setShowSilverForm(true);
    setAmount("");
    setPrice(data.rates.USDXAG.toFixed(2));
  };

  const handleFormCloseSilver = () => {
    setShowSilverForm(false);
    setAmount("");
  };

  const handleInputChangeSilver = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmitSilver = async () => {
    await addToCart(
      "Silver",
      price,
      amount,
      "9999 silver",
      GoldformType || SilverformType
    );
    handleFormCloseSilver();
  };

  if (isLoading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (error) return <h2 className="text-center mt-5">Error loading data...</h2>;

  return (
    <Container>
      <p className="fw-bold fs-2 mt-3 text-center">
        Today's Gold and Silver Prices
      </p>
      <Row className="d-flex justify-content-center align-items-center text-center my-5">
        <Col>
          <p className="fw-bold fs-2 text-gold">Gold Price</p>
          <Image
            src="gold.jpg"
            width="400"
            height="300"
            className="shadow-lg rounded mb-4"
          />
          <h3>
            <span className="text-danger">Gold</span> RM
            {data.rates.USDXAU.toFixed(2)}/g
          </h3>
          <Button
            variant="outline-warning"
            className="me-2"
            onClick={() => handleFormOpenGold("buy")}
          >
            BUY
          </Button>
          <Button
            variant="outline-success"
            onClick={() => handleFormOpenGold("sell")}
          >
            SELL
          </Button>

          <Modal show={showGoldForm} onHide={handleFormCloseGold}>
            <Modal.Header closeButton>
              <Modal.Title>
                {GoldformType === "buy" ? "Buy Gold" : "Sell Gold"}
              </Modal.Title>
              <div className="modal-subtitle px-4">
                {/* <p>Gold Price: RM100</p> */}
                <p>Gold Price: RM {data.rates.USDXAU.toFixed(2)}/g</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Amount (in Grams)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="How many grams?"
                    name="amount"
                    value={amount}
                    onChange={handleInputChangeGold}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleFormCloseGold}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleFormSubmitGold}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <LineChart
              {...chartsParams}
              series={[
                {
                  data: [15, 23, 18, 19, 13],
                  color,
                },
              ]}
            />
          </Stack>
        </Col>
        <Col>
          <p className="fw-bold fs-2 text-silver">Silver Price</p>
          <Image
            src="silver.jpg"
            width="400"
            height="300"
            className="shadow-lg rounded mb-4"
          />
          <h3>
            <span className="text-danger">Silver</span> RM
            {data.rates.USDXAG.toFixed(2)}/g
          </h3>
          <Button
            variant="outline-warning"
            className="me-2"
            onClick={() => handleFormOpenSilver("buy")}
          >
            BUY
          </Button>
          <Button
            variant="outline-success"
            onClick={() => handleFormOpenSilver("sell")}
          >
            SELL
          </Button>

          <Modal show={showSilverForm} onHide={handleFormCloseSilver}>
            <Modal.Header closeButton>
              <Modal.Title>
                {SilverformType === "buy" ? "Buy Silver" : "Sell Silver"}
              </Modal.Title>
              <div className="modal-subtitle px-4">
                {/* <p>Silver Price: RM50</p> */}
                <p>Silver Price: RM {data.rates.USDXAG.toFixed(2)}/g</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Amount (in Grams)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="How many grams?"
                    value={amount}
                    onChange={handleInputChangeSilver}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleFormCloseSilver}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleFormSubmitSilver}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <LineChart
              {...chartsParams}
              series={[
                {
                  data: [27, 20, 24, 19, 13],
                  color,
                },
              ]}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
