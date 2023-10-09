const AuctionItem = (props) => {
  if (!props.AuctionIteminfo) {
    return <p>Loading...</p>;
  }

  // console.log(props);
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <b> {props.AuctionIteminfo.title}</b>
        </div>
        <div className="col-sm-6">
          <b> startbid: USD {props.AuctionIteminfo.startbid}</b>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 ">
          <img
            className="img-fluid"
            src={`/imgs/${props.AuctionIteminfo.photo}`}
            alt="AuctionItem"
          />
        </div>
        <div className="col-sm-6">
          <p> {props.AuctionIteminfo.description} </p>
        </div>
      </div>
    </>
  );
};

export default AuctionItem;
