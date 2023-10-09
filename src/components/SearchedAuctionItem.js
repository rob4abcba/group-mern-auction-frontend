import { useParams } from "react-router-dom";
import AuctionItem from "./AuctionItem";

const SearchedAuctionItem = (props) => {
  let paramObj = useParams();
  console.log(paramObj); //has he AuctionItem id
  console.log(props);

  //this returns single object
  let searchedAuctionItemObj = props.AuctionItems.find(
    (AuctionItem) => AuctionItem._id == paramObj.id
  );
  console.log(searchedAuctionItemObj);

  if (!props) {
    console.log(props);
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1> Searched AuctionItem </h1>
      <AuctionItem AuctionIteminfo={searchedAuctionItemObj} />
    </div>
  );
};

export default SearchedAuctionItem;
