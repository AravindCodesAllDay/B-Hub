import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <motion.div
      className="text-textcolor-0 font-primary flex flex-col items-center justify-center h-screen mt-80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[150px] mb-8">Our Story</h2>
      <div className="text-3xl text-justify max-w-prose">
        <p>
          In the vast landscape of opportunity, amidst the hum of innovation and
          the pulse of progress, there exists a golden path awaiting those with
          vision, courage, and a shared dream. It is a path illuminated by the
          flickering light of possibility, where friends gather, hearts united
          by a common purpose - to harness the power of code and technology to
          shape a better tomorrow.
        </p>
        <p>
          As we stand at the threshold of this adventure, let us embark hand in
          hand, fueled by the fire of passion and the boundless potential of our
          collective imagination. For in the realm of startups, we are not
          merely architects of software; we are architects of destiny, weaving
          threads of innovation and ingenuity into the fabric of our lives and
          businesses.
        </p>
        <p>
          Together, let us dare to dream boldly, to defy convention, and to
          challenge the status quo. Let us breathe life into our ideas, infusing
          them with the spirit of possibility and the promise of transformation.
          And as we navigate the twists and turns of this entrepreneurial
          odyssey, let us do so with unwavering resolve, unwavering in our
          commitment to each other and to the vision that unites us.
        </p>
        <p>
          For it is in the crucible of collaboration, in the crucible of
          friendship, that great companies are born. So let us seize this
          moment, let us seize this opportunity, and let us forge ahead with
          courage and conviction. Together, we will build not just a startup,
          but a legacy - a legacy of innovation, impact, and inspiration.
        </p>
        <p>
          So let us raise our voices in unison, let us raise our hands in
          solidarity, and let us embark on this journey together, knowing that
          with every line of code we write, with every solution we create, we
          are shaping not just our own destinies, but the destiny of generations
          to come.
        </p>
        <p>
          This is our time. This is our moment. Let us seize it with all the
          passion, all the determination, and all the joy that our hearts can
          muster. For together, anything is possible. Together, we will change
          the world.
        </p>
      </div>
    </motion.div>
  );
};

export default OurStory;
