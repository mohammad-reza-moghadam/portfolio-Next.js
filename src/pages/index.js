import Link from "next/link";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

const HomePage = () => {
  return (
    <Layout>
      <div className="cover">
        <div className="hello">
          <h1>Hi we're Fi</h1>
          <div>A Fictional Photography Studio</div>
          <Link rel="stylesheet" href="/services">
            <a className="view-more">What we do</a>
          </Link>
        </div>
      </div>
      <div className="latest-work">
        <h2>Latest Work</h2>
        <Gallery images={images} />
        <div className="">
          <Link href="/portfolio">
            <a className="view-more">View All</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .cover {
            position: relative;
            min-height: 600px;
            background: transparent url(/images/background.jpg) no-repeat center
              center;
            background-size: cover;
          }

          .hello {
            position: absolute;
            top: 60px;
            left: 60px;
            background: #fff;
            padding: 30px;
          }

          .hello h1 {
            margin: 0 0 10px 0;
          }

          a.view-more {
            text-transform: uppercase;
            font-size: 16px;
          }

          .latest-work {
            text-align: center;
            padding: 30px 0;
            margin-bottom: 60px;
          }

          @media (max-width: 600px) {
            .hello {
              left: 30px;
              right: 30px;
              font-size: 18px;
              padding: 20px;
            }

            h1 {
              font-size: 28px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default HomePage;
