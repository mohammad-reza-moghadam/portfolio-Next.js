import Link from "next/link";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
      <style jsx global>
        {`
          .menu {
            display: flex;
            margin: 5px 0 0;
            padding: 0;
            list-style: none;
          }

          .menu li a {
            font-size: 22px;
            color: #111;
            font-weigth: 300;
            padding: 5px 2px;
            margin: 0 10px;
            text-decoration: none;
          }

          .menu li a:hover {
            padding-botton: 3px;
            border-bottom: 2px solid #ffe525;
          }

          @media (max-width: 600px) {
            .menu {
              display: block;
              margin-top: 20px;
            }

            .menu li {
              display: inline-block;
            }

            .menu li a {
              font-size: 18px;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default Menu;
