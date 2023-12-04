import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const JoinCampForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-wide inline-flex items-center mt-3 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Join Camp
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-400 to bg-gray-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <form >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name Here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control text-black md:w-1/2 ml-4 ">
                    <label className="label">
                      <span className="label-text">Age</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="age"
                        placeholder="Your Age Here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number Here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control text-black md:w-1/2 ml-4 ">
                    <label className="label">
                      <span className="label-text">Gender</span>
                    </label>
                    <label className="input-group">
                      <select
                        className="select select-success text-black w-full max-w-xs mt-3"
                        type="text"
                        name="gender"
                        placeholder="Your Gender Here"
                      >
                       
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </label>
                  </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                  <div className="form-control text-blacks md:w-1/2">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="address"
                        placeholder="Your Address Please"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control text-black md:w-1/2 ml-4 ">
                    <label className="label">
                      <span className="label-text">Camp Fees</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="campFees"
                        placeholder="CampFees Here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form Photo Url row */}
                {/* <div className="mb-8">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="photo"
                        placeholder="Photo Url"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div> */}
                <input
                  type="submit"
                  value="Add Camp"
                  className="btn btn-block bg-gray-400"
                />
              </form>

              <div className="flex mt-5 gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinCampForm;
