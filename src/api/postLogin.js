import API from "./API";

export const postLogin = async (credential) => {
  try {
    const resp = await API.post("/auth/user/login", {
      data: {
        credential: credential,
      },
    });

    console.log({ resp });
  } catch (err) {
    console.log("server error");
  }
};
