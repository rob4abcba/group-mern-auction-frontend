import { useState } from "react";
import { useParams } from "react-router-dom";
import SocialLoginButton from "./SocialLoginButton";

const SocialLogin = (props) => {
  // let [] = useState([]);
  // SocialLogin.js component that:
  // filters through the array of company objects

  //iterate and show details
  console.log(props);
  //get category name from params
  const paramsObj = useParams();
  console.log(paramsObj);
  //filter and get an array
  let filteredCompaniesArray = props.Companies.filter(
    (elem) => elem.category == paramsObj.category
  );
  console.log(filteredCompaniesArray);

  return (
    <div className="row">
      <h4>Search results for Companies in : {paramsObj.category} </h4>
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
            {filteredCompaniesArray.map((elem) => {
              return <SocialLoginButton company={elem} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialLogin;
