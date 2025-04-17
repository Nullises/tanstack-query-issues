import LoadingSpinner from "../../shared/components/LoadingSpinner";
import useLabels from "../hooks/useLabels";
import { Label } from "../interfaces";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery?.data?.map((label: Label) => (
        <span
          key={label.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${label.color}`, color: "#ffccd3" }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
