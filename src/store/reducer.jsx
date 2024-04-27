const initialState = {
  mode: "signup",
  formData: {},
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SUBMIT_FORM_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SUBMIT_FORM_SUCCESS":
      return {
        ...state,
        isLoading: false,
        formData: action.payload,
      };
    case "SUBMIT_FORM_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
