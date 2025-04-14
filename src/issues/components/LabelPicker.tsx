import { useQuery } from "@tanstack/react-query";
import sleep from "../../helpers/sleep";

const getLabels = async (): Promise<any> => {
  // intentional delay for educational purposes
  await sleep(2000);

  const res = await fetch(`https://api.github.com/repos/facebook/react/labels`);
  const labels = await res.json();
  console.log(labels);
  return labels;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  if (labelsQuery.isLoading)
    return (
      <div className="flex justify-center text-center h-72">ESPERE...</div>
    );

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </>
  );
};
