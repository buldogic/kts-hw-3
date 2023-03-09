import axios from "axios";

export const api = async <Response>(args: {
  url: string;
  params?: Record<string, string | number>;
}) => {
  try {
    const result = await axios({
      method: "get",
      url: args.url,
      params: args.params,
    });

    return result.data as Response;
  } catch (e) {
    // TODO handle error
    throw e;
  }
};
