import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";

const resume = () => {

  return (
    <motion.div 
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Resume</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Knowledge</h5>
          <div>
            {/* <h5 className="my-2 text-xl font-bold">Marketing</h5>
            <p className="font-semibold">Social marketing since 2006</p> */}
            <p className="my-3">I am constantly updating my knowledge.</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div>
            {/* <h5 className="my-2 text-xl font-bold">Marketing</h5>
            <p className="font-semibold">Social marketing since 2006</p> */}
            <p className="my-3">I mostly use these programs:</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language =>
              <Bar  data={language} key={language.name}/>)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool =>
              <Bar  data={tool} key={tool.name}/>)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default resume;