export const register = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.status);
  } catch (e) {
    throw new Error("code error you will be fix");
  }
};

export const login = async (argEmail, argPassword) => {
  try {
    const res = await fetch("http://localhost:3000/user");
    const data = await res.json();
    console.log(data);

    const dataFind = data.find((arg) => arg.email == argEmail);
    console.log(dataFind);
  } catch (e) {
    throw new Error("login error");
  }
};
