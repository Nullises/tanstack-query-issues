import { githubApi } from "../../api/github.api";
import sleep from "../../helpers/sleep";
import { Label } from "../interfaces";

const getLabels = async (): Promise<Label[]> => {
  // intentional delay for educational purposes
  await sleep(2000);

  const { data } = await githubApi.get<Label[]>(`/labels`);
  return data;
};

export default getLabels;
