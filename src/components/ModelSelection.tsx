import useSWR from "swr";
import dynamic from "next/dynamic";

// Dynamically import react-select without SSR
const Select = dynamic(() => import("react-select"), { ssr: false });

const ModelSelection = () => {
  // Only one model option: Chat GPT 4o Mini
  const modelOptions = [{ value: "Chat GPT 4o Mini", label: "Chat GPT 4o Mini" }];
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "Chat GPT 4o Mini",
  });

  return (
    <Select
      isSearchable={false} // Disable search since there's only one option
      isLoading={false} // No loading needed for static options
      menuPosition="fixed"
      options={modelOptions}
      defaultValue={modelOptions[0]} // Preselect the only option
      placeholder={model}
      className="text-black placeholder:text-white w-full"
      onChange={(e) => setModel((e as { value: string }).value)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "blue" : "#ffffff50",
          backgroundColor: "transparent",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "#ffffff",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          color: "white",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "white",
        }),
      }}
    />
  );
};

export default ModelSelection;
