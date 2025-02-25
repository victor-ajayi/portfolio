"use client";

import Bio from "@/components/bio";
import Contacts from "@/components/contacts";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Moodboard from "@/components/moodboard";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import { motion } from "framer-motion";

// Animation variants for staggered component animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Page() {
  return (
    <div className="flex flex-col mt-3 mx-auto max-w-[800px] px-3 md-custom:px-10 min-h-[95vh]">
      <NavBar />
      <motion.main
        className="grid grid-cols-1 gap-4 mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Bio />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Stack />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Experience />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Projects />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Moodboard />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Contacts />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}
