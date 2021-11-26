function CaregoriesCard({ categories, setSubCategories }) {
  if (categories) {
    console.log(categories);
  }
  return (
   
      <div className="select-menu">
        {categories &&
          categories.map((el) => {
            return (
              <div
                key={el.id}
                onClick={() => {
                  setSubCategories(el.services)
                }}
                
              >
                {el.name}
              </div>
            );
          })}
      </div>
 
  );
}
export default CaregoriesCard;
