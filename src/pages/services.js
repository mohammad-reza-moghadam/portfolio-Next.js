import Layout from "../components/Layout";

const Services = () => {
  return (
    <Layout title="Our Services">
      <h1>Our Services</h1>
      <div className="services">
        <div className="services-list">
          <div className="item">
            <img src="https://source.unsplash.com/WLUHO9A_xik" />
            <h2>Travelling</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus nobis, nihil labore ab maxime pariatur cupiditate vitae
              ipsum cum minima!
            </p>
          </div>
          <div className="item">
            <img src="https://source.unsplash.com/wWfMg7hRBo0" />
            <h2>Wedding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              aut?
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services {
            max-width: 1000px;
            margin: 0 auto;
          }

          .services-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 30px;
          }

          .services .item {
            padding: 20px;
            margin-bottom: 40px;
            width: 45%;
          }

          img {
            width: 400px;
            height: 250px;
          }

          h2 {
            margin: 0 0 5px 0;
          }

          p {
            font-size: 18px;
            color: #777;
          }

          @media (max-width: 600px) {
            .services .item {
              width: auto;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Services;
