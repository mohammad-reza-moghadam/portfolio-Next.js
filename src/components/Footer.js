const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="copyrigth">{new Date().getFullYear()} Fi Studio.</div>
      <style jsx global>
        {`
          .footer-wrapper {
            text-align: center;
            margin-top: 88px;
            padding: 80px 30px;
          }

          .copyright {
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
