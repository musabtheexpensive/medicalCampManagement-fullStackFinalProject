import { useState } from "react";
import Banner from "../Banner/Banner";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import { Link } from "react-router-dom";
import CampCard from "./CampCard";
import { Testimonial } from "../Banner/Testimonial";
import { Helmet } from "react-helmet-async";
import Faq from "./Faq";
import { capitalizeWords } from "../../../utils/capitalizeWords";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../hooks/useAxiosPublic";

const categories = [
  "Pediatric Vaccination Drive",
  "Womens Health Camp",
  "Children's Health Checkup Camp",
  "Mental Health",
  "Senior Citizens Health Camp",
  "Diabetes Awareness Camp",
  "Ophthalmology",
  "Cardiology",
];

const Home = () => {
  const axios = UseAxiosPublic();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const limit = 4;
  // const [sortBy, setSortBy] = useState("mostRegistered");
  // const camps = useLoaderData();

  const getCamps = async () => {
    const res = await axios.get(
      `/allCamps?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    return res;
  };

  const {
    data: camps,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["camp", price, category, page],
    queryFn: getCamps,
  });

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };

  const totalPage = Math.ceil(camps?.data?.total / limit);
  console.log(totalPage);

  if (isError) {
    return <p>Something went Wrong: {error}</p>;
  }
  console.log(camps);

  // let results = [];
  // if (camps) {
  //   if (sortBy === "mostRegistered") {
  //     results = camps.sort((a, b) => b.participants - a.participants);
  //   } else if (sortBy === "leastRegistered") {
  //     results = camps.sort((a, b) => a.participants - b.participants);
  //   } else {
  //     results = camps;
  //   }
  // }

  // const displayCamp = results.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>MediCo | Home</title>
      </Helmet>
      <Banner></Banner>
      <ShuffleHero></ShuffleHero>
      <div className="mb-2 flex flex-col lg:flex-row justify-end items-center p-5 gap-5">
        <h1 className="flex-1 mt-5 text-5xl font-extrabold font-serif">
          Top Rated Camps
        </h1>
        <div className="form-control">
          <label className="mb-2">
            <span className="label-text ">Category</span>
          </label>
          <select
            className="input input-bordered"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled selected>
              Choose one
            </option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {capitalizeWords(item)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control mb-1">
          <label className="label">
            <span className="label-text">Registered</span>
          </label>
          <select
            name="sort"
            className="input input-bordered"
            // onChange={(e) => setSortBy(e.target.value)}
            id=""
          >
            <option value="mostRegistered">Most Registered</option>
            <option value="leastRegistered">Least Registered</option>
          </select>
        </div>
        <div className="form-control mb-1">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <select
            className="input input-bordered"
            onChange={(e) => setPrice(e.target.value)}
          >
            <option disabled selected>
              Choose one
            </option>
            <option value="asc">From Low To High</option>
            <option value="desc">From high To Low</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {camps?.data?.result?.map((item) => (
            <CampCard key={item?.id} camp={item} />
          ))}
        </div>
      )}
      <div className="mb-4 flex justify-center ">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="join float-right border-2 border-neutral-200 mt-8">
            <button
              onClick={handlePrevious}
              className="join-item btn btn-ghost"
            >
              «
            </button>
            {Array.from({ length: totalPage })
            .map((item, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`${
                    pageNumber === page
                      ? "join-item btn text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
                      : "join-item btn "
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button onClick={handleNext} className="join-item btn btn-ghost">
              »
            </button>
          </div>
        )}
      </div>
      <Link to="/availableCamp">
        <button className="m-7 w-11/12 justify-items-center btn lg:ml-16  text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">
          See All Camps
        </button>
      </Link>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
