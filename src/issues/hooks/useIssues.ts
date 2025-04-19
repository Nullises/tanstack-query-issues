import { useQuery } from "@tanstack/react-query";
import getIssues from "../actions/get-issues.action";
import { State } from "../interfaces";
import { useState } from "react";

interface Props {
  state: State;
  selectedLabels: string[];
}

const useIssues = ({ state, selectedLabels }: Props) => {
  const [page, setPage] = useState<number>(1);

  const issuesQuery = useQuery({
    queryKey: [
      "issues",
      {
        state,
        selectedLabels,
        page,
      },
    ],
    queryFn: () => getIssues({ state, selectedLabels, page }),
    staleTime: 1000 * 60, // 1m
  });

  const nextPage = () => {
    if (issuesQuery.data?.length == 0) {
      return;
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  return { issuesQuery, page, setPage, nextPage, prevPage };
};

export default useIssues;
