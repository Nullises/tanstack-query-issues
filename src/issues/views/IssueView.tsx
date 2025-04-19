import { useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { FiSkipBack } from "react-icons/fi";
import useIssue from "../hooks/useIssue";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import { Issue } from "../interfaces";

export const IssueView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { issueQuery, issueCommentsQuery } = useIssue(Number(id ?? "0"));

  if (issueQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">
        <LoadingSpinner />
      </div>
    );

  if (!issueQuery.data)
    return <div className="text-center text-lg">Issue not found</div>;

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {issueCommentsQuery.isLoading ? (
        <LoadingSpinner />
      ) : (
        issueCommentsQuery.data?.map((comment: Issue) => (
          <IssueComment issue={comment} key={comment.id} />
        ))
      )}

      {/* Comentario de otros */}
      {/* <IssueComment body={comment2} />
      <IssueComment body={comment3} /> */}
    </div>
  );
};
