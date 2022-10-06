import Link from "next/link";

export default function Index() {
  const onClick = (e) => {
    e.target.value;
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>My Project</h1>
      <form onSubmit={onSubmit}>
        <button className="next" onClick={onClick}>
          <Link href="/About">
            <a>Next</a>
          </Link>
        </button>
      </form>
      <h2>dd</h2>
      <style jsx>{`
        h1 {
          font-size: 6em;
          width: 255px;
          color: brown;
          font-family: sans-serif;
          position: absolute;
          top: 80px;
          left: 200px;
          animation: show 1s ease-out;
        }
        .next {
          position: absolute;
          top: 54.5%;
          left: 44%;
          width: 80px;
          height: 40px;
          border: 0;
          outline: 0;
          border-radius: 20px;
          background-color: brown;
          animation: side 5s ease-in-out;
        }
        .next a {
          color: white;
          text-decoration: none;
          scroll-behavior: smooth;
        }
        @keyframes show {
          from {
            left: -300px;
            opacity: 0;
          }
          to {
            left: 200px;
            opacity: 1;
          }
        }
        @keyframes noshow {
          from {
            left: 200px;
            opacity: 1;
          }
          to {
            left: -300px;
            opacity: 0;
          }
        }
        @keyframes side {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        h2 {
          font-size: 1000px;
        }
      `}</style>
    </>
  );
}
