import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import webd from "../assets/webd.jpg";

const Services = () => {
  return (
    <div className="lg:text-textcolor-0 font-primary">
      <h2 className="font-primary text-[120px] text-center mb-">
        Services Provided
      </h2>

      <div className="p-4">
        <ServiceItem
          imgSrc={webd}
          imgAlt="Web Development"
          description="Web Development"
        />
        <ServiceItem
          imgSrc={webd}
          imgAlt="Admin Services"
          description="Admin Services"
          reversed
        />
        <ServiceItem
          imgSrc={webd}
          imgAlt="Media Content Creation"
          description="Media Content Creation"
        />
        <ServiceItem
          imgSrc={webd}
          imgAlt="Content Creation"
          description="Content Creation"
          reversed
        />
      </div>
    </div>
  );
};

const ServiceItem = ({ imgSrc, imgAlt, description, reversed }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg flex flex-row justify-center items-center m-12 ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <motion.img
        className="w-1/2 rounded-lg mb-4 flex flex-col grayscale hover:grayscale-0 "
        src={imgSrc}
        alt={imgAlt}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : reversed ? 50 : -50,
        }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-gray-700 flex flex-col text-7xl z-30 mx-6">
        {description}
      </p>
    </div>
  );
};

export default Services;
