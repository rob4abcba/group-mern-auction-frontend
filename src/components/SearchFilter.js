import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {
  let navigate = useNavigate();

  console.log("SearchFilter.js: props =", props);
  // array of distinct Categories
  let arr = props.auctionItems.map((elem) => elem.category);
  console.log("SearchFilter.js: arr =", arr);
  let distinctCategories = Array.from(new Set([...arr]));
  console.log("SearchFilter.js: distinctCategories =", distinctCategories);
  // array.map and generate the options dynamically

  let changeHandler = (e) => {
    // synthetic event
    console.log("selected!" + e.target.value);
    // one SearchResults component that does -
    // filter through the array of house objects and
    // get those house objects that belong to selected category
    navigate(`/searchresults/${e.target.value}`);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="text-center">
          <b> Select Category : </b>
          <select onChange={(e) => changeHandler(e)}>
            <option key="select" value="select">
              {" "}
              Select{" "}
            </option>
            {distinctCategories.map((category) => (
              <option key={category} value={category}>
                {" "}
                {category}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
