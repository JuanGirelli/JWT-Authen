import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  // and return the response
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();

    if(!response.ok) {
      throw new Error('User information not retrieved');
    }

    return data;
  } catch(err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not get user information');
  }
}



export { login };



