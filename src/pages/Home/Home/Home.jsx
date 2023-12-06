import React from "react";
import Banner from "../Banner/Banner";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import { Link, useLoaderData } from "react-router-dom";
import CampCard from "./CampCard";
import { Testimonial } from "../Banner/Testimonial";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Home = () => {
  const camps = useLoaderData();
  const [sortBy, setSortBy] = useState("mostRegistered");
  let results = [];
  if (camps) {
    if (sortBy === "mostRegistered") {
      results = camps.sort((a, b) => b.participants - a.participants);
    } else if (sortBy === "leastRegistered") {
      results = camps.sort((a, b) => a.participants - b.participants);
    } else {
      results = camps;
    }
  }

  const displayCamp = results.slice(0, 6);


  return (
    <div>
      <Helmet>
        <title>MediCo | Home</title>
      </Helmet>
      <Banner></Banner>
      <ShuffleHero></ShuffleHero>
      <div className="flex justify-between mb-12">
        <h1 className="mb-3 text-6xl font-bold text-center">Top Rated Camps</h1>
        <div>
          <label className="input-group flex">
            <select
              name="sort"
              className="select select-bordered w-full"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              id=""
            >
              <option value="mostRegistered">Most Registered</option>
              <option value="leastRegistered">Least Registered</option>
            </select>
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {camps.map((camp) => (
          <CampCard key={camp._id} camp={camp}></CampCard>
        ))}
      </div>
      <Link to="/availableCamp">
        <button className="m-7 w-11/12 justify-items-center btn lg:ml-16  text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
          See All Camps
        </button>
      </Link>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
