import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div style={{ height: "80vh", paddingTop: "8rem" }} className="px-10">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default PageTemplate;
