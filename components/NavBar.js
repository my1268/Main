import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div className="container">
        <Link href="/">
          <a className={router.pathname === "/" ? "click" : ""}>Home</a>
        </Link>
        <Link href="/About">
          <a className={router.pathname === "/About" ? "click" : ""}>About</a>
        </Link>
        <Link href="/Project">
          <a className={router.pathname === "/Project" ? "click" : ""}>
            Project
          </a>
        </Link>
        <Link href="/Contact">
          <a className={router.pathname === "/Contact" ? "click" : ""}>
            Contact
          </a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(10, 100, 90);
          border-radius: 10px;
          padding: 13px;
          gap: 30px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        a:hover {
          transform: scale(1.1) translateX(5%);
        }
        .click {
          color: aliceblue;
        }
      `}</style>
    </nav>
  );
}
