import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MySpot from "./MySpot";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Myspots = () => {

    const [mySpots, setMySpots] = useState([]);

    const { authInfo } = useContext(AuthContext);
    const {user} = authInfo;
    console.log(user.email);

    useEffect(()=>{
        fetch(`http://localhost:5000/myspots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMySpots(data)
        })
    },[])

    console.log(mySpots);
    return (
        <div>
            <Navbar></Navbar>
           <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tourists spots</th>
              <th>Country</th>
              <th>cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {/* row 2 */}
            {
                mySpots.map(mySpot => <MySpot key={mySpot._id} mySpot={mySpot}></MySpot> )
            }
            
          </tbody>
        </table>
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Myspots;