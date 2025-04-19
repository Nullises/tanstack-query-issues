import { FC } from "react";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import useLabels from "../hooks/useLabels";
import { Label } from "../interfaces";

interface Props {
  selectedLabels: string[];
  setSelectedLabels: (selectedLabels: string[]) => void;
}

export const LabelPicker: FC<Props> = ({
  selectedLabels,
  setSelectedLabels,
}) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">
        <LoadingSpinner />
      </div>
    );

  const onLabelSelected = (labelSelected: string) => {
    if (selectedLabels.includes(labelSelected)) {
      setSelectedLabels(
        selectedLabels.filter((label) => label !== labelSelected)
      );
    } else {
      setSelectedLabels([...selectedLabels, labelSelected]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery?.data?.map((label: Label) => (
        <span
          key={label.id}
          onClick={() => onLabelSelected(label.name)}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
            selectedLabels.includes(label.name) ? "selected-label" : ""
          }`}
          style={{ border: `1px solid #${label.color}`, color: "#ffccd3" }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
