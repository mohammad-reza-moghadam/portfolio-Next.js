import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About Us">
      <h1>About Us</h1>
      <ul className="company-info">
        <li>
          <span className="company">Fi Studio Inc</span>
        </li>
        <li>101 Elm Street</li>
        <li>San Fransisco, CA</li>
        <li>
          <a href="#">FiStudio.com</a>
        </li>
      </ul>
      <div className="about-text">
        <img src="images/1.jpg" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa
          deserunt nesciunt obcaecati ut, officiis quam eius ea iure minus a
          quisquam iusto nobis quibusdam quidem accusamus libero qui tenetur.
          Doloremque corrupti, quas itaque tenetur officia aperiam obcaecati
          voluptatem mollitia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa
          deserunt nesciunt obcaecati ut, officiis quam eius ea iure minus a
          quisquam iusto nobis quibusdam quidem accusamus libero qui tenetur.
          Doloremque corrupti, quas itaque tenetur officia aperiam obcaecati
          voluptatem mollitia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsa
          deserunt nesciunt obcaecati ut, officiis quam eius ea iure minus a
          quisquam iusto nobis quibusdam quidem accusamus libero qui tenetur.
          Doloremque corrupti, quas itaque tenetur officia aperiam obcaecati
          voluptatem mollitia?
        </p>
      </div>
      <style jsx>
        {`
          .company-info {
            margin: 0 0 100px 0;
            padding: 0;
            list-style: none;
            font-size: 18px;
          }

          .company {
            font-weight: 700;
            font-size: 24px;
          }

          .about-text {
            color: #777;
            text-align: left;
            max-width: 800px;
            margin: 0 auto 100px;
            padding: 20px;
          }

          img {
            float: right;
            margin: 10px 0 20px 20px;
            width: 400px;
            height: 250px;
          }

          @media (max-width: 600px) {
            .about-text img {
              float: none;
              display: block;
              margin: 0 auto 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default About;
