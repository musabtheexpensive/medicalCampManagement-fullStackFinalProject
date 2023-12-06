import React from "react";
import faq from "../../../assets/faq.jpg";

const Faq = () => {
  return (
    <div>
      <h2 className="text-6xl ml-10 text-center font-extrabold font-serif mt-8">
        Frequently Asked Question
      </h2>
      <div className="flex justify-center gap-4 mt-4 mb-4">
        <div>
          <img className="w-[1000px] h-[600px]" src={faq} alt="" />
        </div>
        <div className="mt-40">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" id="question1" />
            <label htmlFor="question1" className="collapse-title text-xl font-medium">
              What are the questions to ask a camp?
            </label>
            <div className="collapse-content">
              <p>
                What Do You Need in a Camp? ... What Does My Child Want To Do at
                Camp? ... Is Overnight Camp an Option? ...
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" id="question2" />
            <label htmlFor="question2" className="collapse-title text-xl font-medium">
              What is a surgical camp?
            </label>
            <div className="collapse-content">
              <p>
                During the surgical camps, a team of doctors surgically correct
                club feet and other lower limb deformities in toddlers and
                children up to 6 years of age
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" id="question3" />
            <label htmlFor="question3" className="collapse-title text-xl font-medium">
              What does it mean to camp in a hospital?
            </label>
            <div className="collapse-content">
              <p>
                So basically, go camping in a hospital means staying there as if
                it's your home. It's like an adventure out in the hospital
                instead of the wild
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
