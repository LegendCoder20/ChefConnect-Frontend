import {atom} from "recoil";

export const adminRegisterState = atom({
  key: "adminRegisterState",
  default: null,
});

export const adminLoginState = atom({
  key: "adminLoginState",
  default: null,
});

export const addRecipeState = atom({
  key: "addRecipeState",
  default: null,
});

export const authStatusState = atom({
  key: "authStatusState",
  default: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
});
