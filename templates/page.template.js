import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div style={{ height: "85vh" }} className="px-10 pt-32">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default PageTemplate;
