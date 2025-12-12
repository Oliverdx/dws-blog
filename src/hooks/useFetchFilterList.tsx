import { getFilterList, type filterBy } from "@/services/getFilterList";
import { useEffect, useState } from "react";

export interface filterItem {
  id: string,
  name: string,
}

const filterCache: Record<string, filterItem[] | null> = {
  category: null,
  author: null,
};

const useFetchFilterList = (filterBy: filterBy) => {
  const [filterList, setFilterList] = useState<filterItem[]>([]);
  const [loadingFilterList, setLoadingFilterList] = useState<boolean>(false);
  const [errorFilterList, setErrorFilterList] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchFilterList = async () => {

      if(filterCache[filterBy]){
        setFilterList(filterCache[filterBy]);
        return;
      }

      setLoadingFilterList(true);

      try {
        const data = await getFilterList(filterBy);
        filterCache[filterBy] = data;

        if (mounted) {
          setFilterList(data)
        }
      }catch{
        if(mounted) setErrorFilterList('Failed to load the category')
      }finally{
        if(mounted) setLoadingFilterList(false);
      }
    }

    fetchFilterList();

    return () => {
      mounted = false;
    }
  }, [filterBy]);

  return {
    filterList,
    loadingFilterList,
    errorFilterList
  }

};

export default useFetchFilterList;