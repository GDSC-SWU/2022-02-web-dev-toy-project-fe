import axios from "axios";

export const postLogin = async (credential) => {
  try {
    const resp = await axios.post("/auth/user/login", {
      grant_type: "client_credentials",
      credential,
    });

    console.log({ resp });
  } catch (err) {
    console.log("server error");
  }
};