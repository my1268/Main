import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    let mainText = document.querySelector("h1");

    window.addEventListener(
      "scroll",
      function () {
        let value = window.scrollY;
        if (value > 200) {
          mainText.style.animation = "disappear 1s ease-out forwards";
        } else {
          mainText.style.animation = "slide 1s ease-out";
        }
      },
      []
    );
  });
  return (
    <>
      <h1>My Project</h1>
      <button>Next</button>
      <style jsx>{`
        h1 {
          font-size: 6em;
          width: 258px;
          color: brown;
          font-family: sans-serif;
          position: absolute;
          top: 80px;
          left: 200px;
          animation: show 1s ease-out;
        }
        button {
          position: absolute;
          top: 60%;
          left: 44%;
          width: 80px;
          height: 40px;
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
      `}</style>
    </>
  );
}
