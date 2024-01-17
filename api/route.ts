import axios, { AxiosResponse, AxiosError } from "axios";

import { isValidGithubUsername } from "@/lib/utils";

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

export const TwitchAPI = {
  fetchData: async ({ username }: { username: string }): Promise<APIResult> => {
    try {
      const headers = {
        "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko",
        "Content-Type": "text/plain",
      };

      const body = `[{"operationName":"UsernameValidator_User","variables":{"username":"${username}"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"fd1085cf8350e309b725cf8ca91cd90cac03909a3edeeedbd0872ac912f3d660"}}}]`;

      const response: AxiosResponse = await axios.post(
        "https://gql.twitch.tv/gql",
        body,
        {
          headers: headers,
        }
      );

      if (response.data[0].hasOwnProperty("errors")) {
        throw Error(response.data.errors[0].message);
      }

      if (!response.data[0].data.isUsernameAvailable) {
        return Promise.resolve({
          status: "ok",
          available: false,
          message: "",
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

export const DiscordAPI = {
  fetchData: async ({ username }: { username: string }): Promise<APIResult> => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const body = JSON.stringify({
        username: username,
      });

      const response: AxiosResponse = await axios.post(
        "https://discord.com/api/v9/unique-username/username-attempt-unauthed",
        body,
        {
          headers: headers,
        }
      );

      if (response.data.taken) {
        return Promise.resolve({
          status: "ok",
          available: false,
          message: "",
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
          message: error.response?.data.message,
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

export const RedditAPI = {
  fetchData: async ({ username }: { username: string }): Promise<APIResult> => {
    try {
      const headers = {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.3",
      };

      const params = {
        user: username,
      };

      const response: AxiosResponse = await axios.get(
        `https://www.reddit.com/api/username_available.json`,
        {
          params: params,
          headers: headers,
        }
      );

      if (response.data.hasOwnProperty("json")) {
        return Promise.resolve({
          status: "error",
          available: false,
          message: response.data.json.errors[0][1].toString(),
        });
      }

      return Promise.resolve({
        status: "ok",
        available: response.data,
        message: "",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
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

export const GithubAPI = {
  fetchData: async ({ username }: { username: string }): Promise<APIResult> => {
    try {
      if (!isValidGithubUsername(username)) {
        return Promise.resolve({
          status: "error",
          available: false,
          message:
            "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen, and maxiumum is 39 characters.",
        });
      }

      await axios.get(`https://github.com/${username}`);

      return Promise.resolve({
        status: "ok",
        available: false,
        message: "",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          return Promise.resolve({
            status: "ok",
            available: true,
            message: "",
          });
        }
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
