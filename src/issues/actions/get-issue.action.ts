import { githubApi } from "../../api/github.api";
import sleep from "../../helpers/sleep";
import { Issue } from "../interfaces";

const getIssue = async (issueNumber: number): Promise<Issue> => {
  // intentional delay for educational purposes
  await sleep(2000);

  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

export default getIssue;
