import React, { useEffect, useState } from "react";

const HorizontalFlexBox = ({ boxData }) => {

  const [dataKeys,setDataKeys] = useState([]);

  useEffect(()=>{
    if(boxData){
      setDataKeys(Object.keys(boxData));
    }
  },[boxData]);


  let imgTitle = {
    "totalRevenue": {
      title: "Total Revenue",
      img: "./total-revenues.png"
    },
    "peopleVisited": {
      title: "People Visited",
      img: "./people-visited.png"
    },
    "averageSalesPerDay": {
      title: "Average Sales Per Day",
      img: "./APSD.png"
    },
    "unitSoldPerDay": {
      title: "AverageSalesPerDay",
      img: "./UPSD.png"
    }
  };

  const innerColumn = (key,i) => {
    return (
      <div key={i} className="flex-grow w-1/3 p-4 m-2 lg:w-1/5 sm:w-1/5 box-color text-sm">
        <div className="flex">
          <img className="w-10" src={imgTitle[key]["img"]} />
          <div className="ml-3">
            <span>{imgTitle[key]["title"]}</span>
            <p>{boxData[key]}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap">
      {dataKeys.map((key,i) => {
        return (innerColumn(key,i));
      })}
    </div>
  );
};

export default HorizontalFlexBox;
