import { useNavigate } from "react-router-dom";

const SearchResultsRow = (props) => {
  const navigate = useNavigate();

  let clickHandler = () => {
    console.log("clicked!");
    navigate("/searchedAuctionItem/" + props.AuctionItem._id);
  };

  return (
    <tr key={props.AuctionItem._id} onClick={clickHandler}>
      <td scope="row">{props.AuctionItem.title}</td>
      <td>{props.AuctionItem.startbid}</td>
      {/* <td>{props.AuctionItem.description}</td> */}
    </tr>
  );
};

export default SearchResultsRow;
