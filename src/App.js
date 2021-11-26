import "./App.css";
import CategoriesCard from "./Components/CategoriesCard";
import MasterCard from "./Components/MasterCard";
import { LAUNCHES_QUERY } from "./LaunchesQuery";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import SubcategoriesCard from "./Components/SubcategoriesCard";

function App() {
  const { data } = useQuery(LAUNCHES_QUERY);

  const [categories, setCategories] = useState();
  const [subCategories, setSubCategories] = useState();

  // useEffect(() => {
  //   data && setOriginalData(data.master_categories);
  // }, [data]);

  return (
    <div>
      <MasterCard masterData={data} setCategories={setCategories} />
      <div className='main'>
        <CategoriesCard
          categories={categories}
          setSubCategories={setSubCategories}
        />
        <SubcategoriesCard subCategories={subCategories} />
      </div>
    </div>
  );
}
/*

      */
export default App;
