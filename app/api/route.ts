import axios from "axios";
import { setTimeout } from "timers/promises";

export const InstagramAPI = {
  fetchData: async ({ username }: { username: string }) => {
    await setTimeout(1000);
    try {
      const myHeaders = {
        "X-Csrftoken": "missing",
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);

      const secondResponse = await axios.post(
        "https://www.instagram.com/api/v1/web/accounts/web_create_ajax/attempt/",
        urlencoded.toString(),
        {
          headers: myHeaders,
        }
      );

      if (secondResponse.status !== 200) {
        throw new Error("Instagram is down2");
      }

      const data = secondResponse.data;

      if (data?.status === "ok") {
        if (data?.errors.hasOwnProperty("username")) {
          return { available: false };
        }
        return { available: true };
      }
      return { available: false };
    } catch (error) {
      return { available: false };
    }
  },
};
