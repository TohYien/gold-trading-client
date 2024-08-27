import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <p className="bg-primary fw-bold text-light py-2 fs-3 rounded-pill mt-3 text-center shadow-sm">
        Register your Gold Trading Account Today
      </p>
      <Row className="text-center d-flex align-items-center mt-5">
        <Col md={6} className="d-flex flex-column align-items-start">
          <h1 className="fw-bold text-dark">Start trading Gold with a trusted global broker</h1>
          <p className="fs-5 text-muted mt-3">
            With Orbex, you can trade the price of Gold without owning the underlying asset.
            Simply place Buy (long) and Sell (short) trades from as little as $10 on our MetaTrader 4 and MetaTrader 5 platforms.
          </p>
          <p className="fs-5 text-muted mt-3">
            Benefit from both rising and falling prices by placing trades with up to 500 times leverage, depending on your outlook.
          </p>
          <p className="fs-5 text-muted mt-3">
            Trade Gold and over 400 other assets, including stocks, currencies, indices, and commodities, five days a week, 24 hours a day on your desktop or mobile device with Orbex!
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image src="1.png" rounded fluid className="shadow-lg" />
        </Col>
      </Row>
      <Row className="bg-dark py-4 px-5 d-flex justify-content-center align-items-center text-center text-light rounded-pill shadow-sm mt-5">
        <Col md={3} xs={12}>
          <Image src="a.png" width="45" />
          <p className="fw-bold fs-4 pt-2">0.3s</p>
          <p className="fw-light fs-5">Average Execution</p>
        </Col>
        <Col md={3} xs={12}>
          <Image src="b.png" width="55" />
          <p className="fw-bold fs-4 pt-2">0.05</p>
          <p className="fw-light fs-5">Minimum Spreads</p>
        </Col>
        <Col md={3} xs={12}>
          <Image src="c.png" width="55" />
          <p className="fw-bold fs-4 pt-2">24/5</p>
          <p className="fw-light fs-5">Expert Support</p>
        </Col>
        <Col md={3} xs={12}>
          <Image src="d.png" width="55" />
          <p className="fw-bold fs-4 pt-2">1:500</p>
          <p className="fw-light fs-5">Max. Leverage</p>
        </Col>
      </Row>
      <Row className="text-center mt-5 mb-5">
        <h1 className="mb-5 fw-bold text-dark">Why trade gold with Orbex</h1>
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <Image src="2.png" width="250" className="mb-3 shadow-sm" fluid />
          <h2 className="fw-bold">Fast Deposits & Withdrawals</h2>
          <p className="fs-6 text-muted">
            Deposit in your preferred method, start trading, and enjoy same-day credit card withdrawals.
          </p>
        </Col>
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <Image src="3.png" width="250" className="mb-3 shadow-sm" fluid />
          <h2 className="fw-bold">24/5 Expert Support</h2>
          <p className="fs-6 text-muted">
            Get all the help you need with your trading from Orbex’s multilingual support team.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Image src="4.png" width="250" className="mb-3 shadow-sm" fluid />
          <h2 className="fw-bold">Spreads from $0.05</h2>
          <p className="fs-6 text-muted">
            Trade with minimal spreads and the lowest costs in the market to suit any trading strategy, from scalping to hedging!
          </p>
        </Col>
      </Row>
      <Row>
        <p className="text-center text-muted fw-light fs-5 mb-5">
          Whether you are a beginner learning the ropes or testing your strategies before investing with real funds, our Demo Account is the best place to start. Simply register, open a Demo Account, and put your skills to the test!
        </p>
        <p className="fs-6">
          <span className="fw-bold">Risk Warning:</span> Trading complex financial instruments carries a high level of risk and may not be suitable for all investors. Before deciding to trade, carefully consider your investment objectives, experience, and risk appetite. There is a possibility you may sustain a loss of some or all of your investment; do not invest money you cannot afford to lose. Seek advice from an independent financial advisor if needed. Orbex Global does not offer its services to residents of certain jurisdictions such as the USA, Iran, North Korea, Indonesia, Mauritius, and Romania.
        </p>
      </Row>
    </Container>
  );
};

export default Home;
