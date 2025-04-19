import { useQuery } from "@tanstack/react-query";
import getIssue from "../actions/get-issue.action";
import getIssueComments from "../actions/get-issue-comments.action";

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60, // 1m
  });

  const issueCommentsQuery = useQuery({
    queryKey: ["issueComment", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 1000 * 60, // 1m
  });

  return { issueQuery, issueCommentsQuery };
};

export default useIssue;
