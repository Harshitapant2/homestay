import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}