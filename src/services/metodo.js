import axios from "axios";

const url_api = "https://jtzzynaju6.execute-api.us-east-1.amazonaws.com/";

export const metodoMoora = async (data) => {
  try {
    const response = await fetch(`${url_api}/moora`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response; // No necesitas devolver solo response.status, puedes devolver el objeto de respuesta completo.
  } catch (error) {
    return false;
  }
};

export const metodoPonLin = async (data) => {
  try {
    const response = await fetch(`${url_api}/ponderacinolineal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return false;
  }
};

export const metodoTopsis = async (data) => {
  try {
    const response = await fetch(`${url_api}/topsis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return false;
  }
};
