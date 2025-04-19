import { useEffect, useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import useIssues from "../hooks/useIssues";
import { State } from "../interfaces";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

export const ListView = () => {
  const [state, setState] = useState(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery, page, setPage, prevPage, nextPage } = useIssues({
    state,
    selectedLabels,
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  if (issuesQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <>
          <IssueList
            issues={issuesQuery.data!}
            state={state}
            setState={setState}
          />
          <div className="flex justify-between items-center">
            <button
              disabled={page == 1}
              onClick={() => prevPage()}
              className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all"
            >
              Prev
            </button>
            <span>{page}</span>
            <button
              onClick={() => nextPage()}
              className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all"
            >
              Next
            </button>
          </div>
        </>
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          selectedLabels={selectedLabels}
          setSelectedLabels={setSelectedLabels}
        />
      </div>
    </div>
  );
};
