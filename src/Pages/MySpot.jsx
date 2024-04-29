import { Link } from "react-router-dom";

const MySpot = ({ mySpot }) => {
  const handleDelete = (id) => {
    fetch(
      `https://touro-server-30r3lwtut-md-parvaj-mosharofs-projects.vercel.app/delete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { touristsSpotName, countryName, cost, _id } = mySpot;
  return (
    <>
      <tr className="hover">
        <td>{touristsSpotName}</td>
        <td>{countryName}</td>
        <td>$ {cost}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button>Update</button>
          </Link>
        </td>
        <td>
          <Link onClick={() => handleDelete(_id)}>
            <button>Delete</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MySpot;
