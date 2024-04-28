import { Link } from "react-router-dom";

const MySpot = ({ mySpot }) => {
  const { touristsSpotName,countryName, cost, _id } = mySpot;
  return (
    <>
      <tr className="hover">
              <td>{touristsSpotName}</td>
              <td>{countryName}</td>
              <td>$ {cost}</td>
              <td><Link to={`/update/${_id}`}><button >Update</button></Link></td>
              <td><Link to={`/update/${_id}`}><button >Delete</button></Link></td>
            </tr>
    </>
  );
};

export default MySpot;
