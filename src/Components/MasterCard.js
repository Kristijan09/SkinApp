import "../Components/MasterCard.css";
import { Row, Col} from "antd"

function MasterCard({ masterData, setCategories }) {
  return (
    <div className="flex-container">
      {masterData &&
        masterData.master_categories.map((el) => {
          // console.log(el);
          return (
            <div
              key={el.id}
              onClick={() => {
                setCategories(el.categories);
              }}
            >
              {el.name}
            </div>
          );
        })}
    </div>
  );
}

export default MasterCard;

