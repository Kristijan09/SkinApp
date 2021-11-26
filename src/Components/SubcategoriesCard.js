function SubcategoriesCard({ subCategories }) {
  if (subCategories) {
    console.log(subCategories);
  }
  return (
    <div className="detail">
      {subCategories &&
        subCategories.map((el) => {
          return <div>{el.name}</div>;
        })}
    </div>
  );
}
export default SubcategoriesCard;
