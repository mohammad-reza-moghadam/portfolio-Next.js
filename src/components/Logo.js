import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a>Fi Studio</a>
      </Link>
      <style jsx global>
        {`
          .logo img {
            display: block;
            width: 120px;
          }

          @media (max-width: 600px) {
            .logo {
              display: inline-block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Logo;
