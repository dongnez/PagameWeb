import { motion } from "framer-motion";
import { Component } from "react";
import Carrousel from "./homeCarrousel/Carrousel";

export class Home extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.375 }}
        className="text-white text-4xl font-bold relative"
      >
        <Carrousel />
      </motion.div>
    );
  }
}

export default Home;
