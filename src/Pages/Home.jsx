import { useEffect, useState } from "react";
import Banner from "../Component/Banner";
// import Estate from "../Component/Estate";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
// import { useLoaderData } from "react-router-dom";
import AllMySpot from "./AllMySpot";
import SCountry from "./SCountry";

const Home = () => {
  const [mySpots, setMySpots] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(
      `https://touro-server-30r3lwtut-md-parvaj-mosharofs-projects.vercel.app/myspots`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMySpots(data);
      });
  }, []);

  useEffect(() => {
    document.title = "Touro";
  }, []);

  useEffect(()=>{
    fetch('http://localhost:5000/country')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCountry(data);
    })
  },[])

  // const estates = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div> */}

      <div className="w-full flex justify-center my-10 ">
        {" "}
        <h1 className=" font-extrabold mx-auto text-3xl">ALL Tourists Spots</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mySpots.map((mySpot) => (
          <AllMySpot key={mySpot._id} mySpot={mySpot}></AllMySpot>
        ))}
      </div>
      <div>
      <div className="w-full flex justify-center my-10 ">
        {" "}
        <h1 className=" font-extrabold mx-auto text-3xl">Country</h1>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            country.map(sCountry => <SCountry key={sCountry._id} sCountry={sCountry}></SCountry>)
          }
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
