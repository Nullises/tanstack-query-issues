import { githubApi } from "../../api/github.api";
import sleep from "../../helpers/sleep";
import { Issue, State } from "../interfaces";

interface Props {
  state: State;
  selectedLabels: string[];
  page: number;
}

const getIssues = async ({
  state,
  selectedLabels,
  page,
}: Props): Promise<Issue[]> => {
  // intentional delay for educational purposes
  await sleep(2000);

  const params = new URLSearchParams();

  if (state !== State.All) {
    params.append("state", state);
  }

  if (selectedLabels.length > 0) {
    params.append("labels", selectedLabels.join(","));
  }

  params.append("page", `${page}`);
  // TODO: Assign issues per page
  params.append("per_page", "5");

  const { data } = await githubApi.get<Issue[]>(`/issues`, {
    params,
  });
  return data;
};

export default getIssues;
