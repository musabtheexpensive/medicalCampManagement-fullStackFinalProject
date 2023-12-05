import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { GiGoblinCamp } from "react-icons/gi";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamps = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const addItem = {
        name: data.name,
        SpecializedServicesProvided: data.SpecializedServicesProvided,
        description: data.description,
        targatedAudience: data.targatedAudience,
        dateAndTime: data.dateAndTime,
        VenueLocation: data.VenueLocation,
        image: res?.data?.data?.url,
      };

      axiosSecure.post("/addCamp", addItem)
      .then((res) => {
        console.log(res);
        if (res.data) {
          reset();
          Swal.fire({
            title: `${data.name} is added to the CampSection.`,
            text: "Added The Camp Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    }
  };
  return (
    <div>
      <Helmet>
        <title>MediCo | AddCamps</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold text-center">Add A Camp</h1>
      <div className="mt-5 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Camp Name*</span>
            </label>
            <input
              type="text"
              placeholder="Camp Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="flex gap-6">
            {/*  Specialized Services Provided */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">
                  Specialized Services Provided*
                </span>
              </label>
              <select
                defaultValue="default"
                {...register(" SpecializedServicesProvided", {
                  required: true,
                })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Service
                </option>
                <option value="pediatric">Pediatric Vaccination Drive</option>
                <option value="womensHealth">Womens Health Camp</option>
                <option value="Hearts">Heart Health Awareness Camp</option>
                <option value="clinic">Vitality Wellness Clinic</option>
                <option value="seniorCitizen">
                  Senior Citizens Health Camp
                </option>
                <option value="mentalHealth">
                  Mental Health Awareness Seminar
                </option>
              </select>
            </div>

            {/* VenueLocation */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Venue Location</span>
              </label>
              <input
                type="text"
                placeholder="Venue
                Location Here"
                {...register("VenueLocation", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Scheduled Date and Time */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Scheduled Date and Time</span>
            </label>
            <input
              type="text"
              placeholder="Scheduled Date and Time"
              {...register("dateAndTime", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          {/* Targeted Audience */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Targeted Audience</span>
            </label>
            <input
              type="text"
              placeholder="Targeted Audience"
              {...register("targatedAudience", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          {/*  Comprehensive Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Comprehensive Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder=" Comprehensive Description Here"
            ></textarea>
          </div>

          <button className="btn btn-wide mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Add Camp <GiGoblinCamp className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCamps;
