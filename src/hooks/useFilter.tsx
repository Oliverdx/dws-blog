import { FilterContext } from "@/context/filtercontext";
import { useContext } from "react";

const useFilter = () => {
  const context = useContext(FilterContext);

  return context
};

export default useFilter;