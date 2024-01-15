import axios, { AxiosResponse, AxiosError } from "axios";

export type APIResult = {
  status: "ok" | "error";
  available: boolean;
  message: string;
};

export const InstagramAPI = {
  fetchData: async ({ username }: { username: string }): Promise<APIResult> => {
    try {
      const headers = {
        "X-Csrftoken": "rand",
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);

      const response: AxiosResponse = await axios.post(
        "https://www.instagram.com/api/v1/web/accounts/web_create_ajax/attempt/",
        urlencoded.toString(),
        {
          headers: headers,
        }
      );

      if (response.data.status !== "ok") {
        throw new Error(`Instagram API error! Status: ${response.status}`);
      }

      if (response.data.errors.hasOwnProperty("username")) {
        return Promise.resolve({
          status: "ok",
          available: false,
          message: response.data.errors.username || "",
        });
      }

      return Promise.resolve({
        status: "ok",
        available: true,
        message: "",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        return Promise.resolve({
          status: "error",
          available: false,
          message: error.message,
        });
      }

      return Promise.resolve({
        status: "error",
        available: false,
        message: "Generic message error",
      });
    }
  },
};
