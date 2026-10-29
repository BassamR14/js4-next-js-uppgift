import { fetchData } from "../lib/fetchData";

export default async function getMessage() {
  try {
    const res = await fetchData("message");

    return res;
  } catch (error) {
    console.log(error);
  }
}
