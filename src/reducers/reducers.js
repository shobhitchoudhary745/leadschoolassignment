// reducers.js

const initialState = {
  info: {
    state: "",
    country: "",
    place: "",
  },
  isLoading: false,
  reset: false,
  location:{
    latitude:"",
    longitude:""
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO":
      return {
        ...state,
        info: action.payload.data,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload.data,
      };
    case "SET_RESET":
      return {
        ...state,
        reset: !state.reset,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location:action.payload.data
      }

    default:
      return state;
  }
};

export default rootReducer;
