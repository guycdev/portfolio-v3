import React from "react";
import FlowNavigation from "./FlowNavigation";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { AboutFooter } from "./AboutFooter";
import { motion } from "framer-motion";

const HomeInformation = () => {
  return (
    <motion.div className="relative h-[100%] w-[100%] flex-1 rounded-s-md bg-bg p-3">
      <Link href="/" className="clickable absolute left-4 top-4">
        <IconButton
          icon={<BiHome />}
          aria-label="home page"
          backgroundColor="transparent"
          color="gray.200"
          _hover={{ color: "black", background: "white" }}
          borderRadius="50%"
          p={1}
          border="1px solid gray "
        />
      </Link>
      <div className="flex h-[100%] flex-col justify-between p-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-semibold text-primary">Guy Cohen</h2>
            <div className="flex flex-col gap-0">
              <p className="text-lg text-text ">Software Engineer</p>
              <p className="text-primary">
                Building pixel perfect UIs and scalable APIs
              </p>
            </div>
          </div>
          <p className="text-sm text-text">
            In 2020, I discovered the world of programming. Since then I have
            made it my mission to turn that passion into a career. Fast-forward
            to today and I am currently in the process of completing my Bachelor
            in Computer Science while having already completed my Bachelor in
            Finance. I am working as a Software Engineering intern at ZeroX
            gaming, and love participating and being involved with my school’s
            hackathons.
          </p>
        </div>
        <FlowNavigation />
        <AboutFooter />
      </div>
    </motion.div>
  );
};

export default React.memo(HomeInformation);
