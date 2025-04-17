import LoadingSpinner from "../../shared/components/LoadingSpinner";
import useIssues from "../hooks/useIssues";
import { IssueItem } from "./IssueItem";

export const IssueList = () => {
  const { issuesQuery } = useIssues();

  const issues = issuesQuery.data ?? [];

  if (issuesQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">
        <LoadingSpinner />
      </div>
    );

  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4 animate-fadeIn">
        {issues?.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
