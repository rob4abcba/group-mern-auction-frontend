import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
  // let [] = useState([]);
  //  SearchResults component that does -
  // filter through the array of AuctionItem objects and
  // get those AuctionItem objects that belong to selected category
  //iterate and show details
  console.log(props);
  //get category name from params
  const paramsObj = useParams();
  console.log(paramsObj);
  //filter and get an array
  let filteredAuctionItemsArray = props.AuctionItems.filter(
    (elem) => elem.category == paramsObj.category
  );
  console.log(filteredAuctionItemsArray);

  return (
    <div className="row">
      <h4>Search results for AuctionItems in : {paramsObj.category} </h4>
      <div className="table-responsive">
        <table className="table table-primary table-hover">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">startbid</th>
              {/* <th scope="col">Description</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredAuctionItemsArray.map((elem) => {
              return <SearchResultsRow AuctionItem={elem} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
