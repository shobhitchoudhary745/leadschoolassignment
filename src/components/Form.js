import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Form = () => {
  const [postalCode, setPostalCode] = useState("");
  const dispatch = useDispatch();
  const reset = useSelector((state) => state.reset);
  useEffect(() => {
    setPostalCode("");
  }, [reset]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      alert("OOPS! You are offline.");
      return;
    }
    dispatch({ type: "SET_IS_LOADING", payload: { data: true } });
    try {
      const { data, status } = await axios.get(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      dispatch({ type: "SET_IS_LOADING", payload: { data: false } });
      if (status === 200) {
        dispatch({
          type: "SET_INFO",
          payload: {
            data: {
              country: data.country,
              state: data.places[0].state,
              place: data.places[0]["place name"],
            },
          },
        });
        dispatch({
          type: "SET_LOCATION",
          payload: {
            data: {
              longitude: data.places[0].longitude,
              latitude: data.places[0].latitude,
            },
          },
        });
      }
    } catch (e) {
      alert("No data is found with this postal code");
      dispatch({ type: "SET_IS_LOADING", payload: { data: false } });
    }
  };

  return (
    <form className="flex gap-3 items-center flex-col" onSubmit={handleSubmit}>
      <input
        required
        className=" focus:outline-none rounded-lg border border-[#999999] px-3 py-1"
        type="text"
        placeholder="Enter postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button
        className="w-3/6 rounded-lg border text-white bg-[#0000ff] hover:opacity-[0.7] border-[#999999] px-3 py-1"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
