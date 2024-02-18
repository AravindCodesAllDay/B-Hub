import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Title from "../components/Title";
import Share from "../components/Share";
import Marquee from "react-fast-marquee";
import Poster from "../components/Poster";
import CardPages from "../components/CardPages";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background-0 w-full h-full">
        <Title />
        <Marquee
          speed={300}
          className="h-screen text-center text-[350px] service lg:text-textcolor-0 font-primary"
        >
          <h1>Portfolio *</h1>
        </Marquee>
        {/* <CardPages /> */}
        <Services />
        {/* <Poster /> */}
        <Footer />
        <Share />
      </div>
    </>
  );
};

export default Home;
