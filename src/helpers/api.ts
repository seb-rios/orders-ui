export const apiCall = async (
  endpoint: string,
  method: string = "GET",
  body: any = null,
  headers = {}
) => {
  const baseUrl = "http://localhost:8080/"; // Replace with your backend URL

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // Propagate the error to the calling function
  }
};
