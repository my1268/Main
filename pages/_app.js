import NavBar from "../components/NavBar";
export default function Any({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
