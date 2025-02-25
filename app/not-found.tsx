"use client";

import NavBar from "@/components/navbar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function NotFound() {
  return (
    <div className="mt-3 mx-auto max-w-[800px] px-3 md-custom:px-10">
      <NavBar />
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl font-bold mb-2">404</h1>
            <h2 className="text-xl font-medium">Page Not Found</h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-8 text-muted-foreground"
          >
            Sorry, I don&apos;t have what you&apos;re looking for. <br />
            But I do have this photo of Gojo Satoru and Geto Suguru {":)"}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/gojo-geto.jpeg"
                width={2100}
                height={1182}
                alt="Gojo Satoru and Geto Suguru"
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
              />
            </AspectRatio>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground shadow hover:text-primary transition-all duration-200"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
