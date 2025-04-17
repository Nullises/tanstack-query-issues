import { useQuery } from "@tanstack/react-query";
import getIssue from "../actions/get-issue.action";

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60, // 1m
  });

  return { issueQuery };
};

export default useIssue;
