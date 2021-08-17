import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = ({endpoint}) => {
  console.log(endpoint);
  
  return (
    <motion.div 
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="my-3 font-medium">
        Hello! You can call me Aldis. I am front end web developer. 
        In my web projects I use 4 general work principles. Final product must be <span className="font-bold text-purple-500">
          intuitive</span> for users, <span className="font-bold text-purple-500">responsive</span> to any device, working <span className="font-bold text-purple-500">fast</span> and <span className="font-bold text-purple-500">corresponding</span> to the purpose.
      </h1>
      <div className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100" style={{marginLeft:'-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wider">I can create...</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(service => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-white rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

//!called every time  the page refreshed
export const getServerSideProps: GetServerSideProps = async (
   context: GetServerSidePropsContext
) => {
  //  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  //  const data = await res.json()
  //  console.log(data)
   return { props: { endpoint: process.env.VERCEL_URL } };
};

export default index;

