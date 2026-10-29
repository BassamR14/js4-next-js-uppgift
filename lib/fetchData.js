const BASE_URL = "/api";

export const fetchData = async (endpoint = "", method = "GET", body = null) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};
