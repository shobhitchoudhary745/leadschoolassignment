import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";

const LocationDisplay = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  const location = useSelector((state) => state.location);
  const isLoading = useSelector((state) => state.isLoading);
  // console.log(info);
  return (
    <div>
      {isLoading && <InfinitySpin width="200" color="#0000ff" />}
      {info.state !== "" && location.longitude !== "" && (
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="font-semibold">Country : {info.country}</p>
          <p className="font-semibold">State : {info.state}</p>
          <p className="font-semibold">Place : {info.place}</p>
          <button
            onClick={() => {
              dispatch({
                type: "SET_INFO",
                payload: {
                  data: {
                    country: "",
                    state: "",
                    place: "",
                  },
                },
              });
              dispatch({ type: "SET_RESET" });
            }}
            className="w-3/6 rounded-lg border text-white bg-[#0000ff] hover:opacity-[0.7] border-[#999999] px-3 py-1"
          >
            Reset
          </button>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-red-500 visited:text-purple-500 underline"
          >
            open location in google maps?
          </a>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
