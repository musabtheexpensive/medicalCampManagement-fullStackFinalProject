import React from "react";
import Banner from "../Banner/Banner";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import { useLoaderData } from "react-router-dom";
import CampCard from "./CampCard";
import { Testimonial } from "../Banner/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const camps = useLoaderData();
  return (
    <div>
          <Helmet>
                <title>MediCo | Home</title>
            </Helmet>
      <Banner></Banner>
      <ShuffleHero></ShuffleHero>
      <div className="grid md:grid-cols-3 gap-4">
        {camps.map((camp) => (
          <CampCard key={camp._id} camp={camp}></CampCard>
        ))}
      </div>
      <button className="m-7 btn btn-block text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See All Camps</button>
    <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
