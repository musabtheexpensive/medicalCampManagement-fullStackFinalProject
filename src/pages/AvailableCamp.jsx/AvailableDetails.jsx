import React from "react";
import { useLoaderData } from "react-router-dom";
import Loaders from "./Loaders";

const AvailableDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    _id,
    campName,
    image,
    campFees,
    scheduledDateTime,
    venueLocation,
    specializedServices,
    healthcareProfessionals,
    targetAudience,
  } = details;
  return (
    <div className="pt-28">
      <div role="status" className="animate-pulse">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div className="flex items-center justify-center mt-4">
          <svg
            className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
          <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <img src={image} className="w-11/12 mx-auto mt-5 rounded-lg shadow-2xl" />
      <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div>
            <h1 className="text-5xl font-bold">{campName}</h1>
            <h3 className="text-3xl font-bold">{campFees}</h3>
            <h2 className="text-3xl text-rose-500 font-bold">
              {healthcareProfessionals}
            </h2>
            <p className="text-2xl font-extrabold">{venueLocation}</p>
            <p className="text-xl font-bold">{specializedServices}</p>
            <p className="py-6">
              A medical manual is literature (usually a book) describing
              diagnosis, treatment, management, and prognosis of various
              disorders. The first known medical manual is the Edwin Smith
              papyrus of ancient Egypt. Over-the-counter (OTC) drugs.
              Over-the-counter drugs are medicines you can buy at pharmacies,
              convenience and grocery stores without a prescription from your
              health care provider. ... Prescription medicines. ...
              Complementary medicines.MedSpaCy is a library of tools for
              performing clinical NLP and text processing tasks with the popular
              spaCy framework.
              <h2 className="text-2xl m-3">
                Liquid. The active part of the medicine is combined with a
                liquid to make it easier to take or better absorbed. ...
              </h2>
              <ul className="list-disc">
                <ol>Capsules. ...</ol>
                <ol>Topical medicines. ...</ol>
                <ol>Suppositories. ...</ol>
                <ol>Drops. ...</ol>
                <ol>Inhalers. ...</ol>
                <ol>Injections.</ol>
              </ul>
            </p>
            <h2 className="text-3xl font-extrabold">Camping Time : {scheduledDateTime}</h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text">For : {targetAudience}</p>
          </div>
        </div>
      </div>
      <Loaders></Loaders>
    </div>
  );
};

export default AvailableDetails;
