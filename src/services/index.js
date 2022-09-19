const urlUser = "https://coding-challenge-api.aerolab.co/user/me";
const urlProducts = "https://coding-challenge-api.aerolab.co/products";
const urlPoints = "https://coding-challenge-api.aerolab.co/user/points";
const urlRedeem = "https://coding-challenge-api.aerolab.co/redeem";
const urlHistory = "https://coding-challenge-api.aerolab.co/user/history";

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzAzZGFiOTQxYmRiZjAwMjE2YzA0YzUiLCJpYXQiOjE2NjExOTY5ODV9.YlNkLPvSh7pfcXK4tENrytosUnHVPmFVTqK76hnMOGI",
};

export const getUser = async () => {
  try {
    const response = await fetch(urlUser, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(urlProducts, {
      headers: headers,
    });
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const addPoints = async (amount) => {
  try {
    const response = await fetch(urlPoints, {
      method: "POST",
      body: JSON.stringify({ amount: amount }),
      headers: headers,
    });

    if (response.ok) {
      console.log(response);
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const redeem = async (id) => {
  try {
    const response = await fetch(urlRedeem, {
      method: "POST",
      body: JSON.stringify({ productId: id }),
      headers: headers,
    });
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const getHistory = async () => {
  try {
    const response = await fetch(urlHistory, {
      headers: headers,
      method: "GET",
    });
    if (response.ok) {
      const x = response.json();
      return x;
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};
