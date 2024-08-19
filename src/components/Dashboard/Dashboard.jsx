import React from 'react'
import { useState } from "react";
import {Chart as ChartJS} from "chart.js/auto";

import BarChart from "./components/BarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import PieChart from "./components/PieChart.jsx";
import PolarAreaChart from "./components/PolarChart.jsx";

import UserData1 from './DataSets/DataBar.jsx'
import SalesData from "./DataSets/DataLine.jsx";
import FruitConsumption from "./DataSets/DataPie.jsx";
import MonthlySalesData from "./DataSets/DataPolar.jsx";
import "./Dashboard.css"
import SideBar from './Bars/SideBar/SideBar.jsx';


function Dashboard() {

// =================================================Bar Chart=============================================================

const [userData1, setuserData1] = useState({
    labels:UserData1.map((data) => data.year),
    datasets:[{
        label:"Income",
        data:UserData1.map((data) => data.Income),
        backgroundColor:["green"],
        // borderRadius:5,
        borderColor:"black",
        borderWidth:2,
    }
    ,
    {
        label:"Expenditure", 
        data:UserData1.map((data) => data.Expenditure),
        backgroundColor:["blue"],
        // borderRadius:5,
        borderColor:"black",
        borderWidth:2,
    }
]
});


// ==========================================================Line Chart=============================================


const [salesData, setsalesData] = useState({
    labels:UserData1.map((data) => data.year),
    datasets:[{
        label:"Electronics",
        data:SalesData.map((data) => data.Electronics),
        backgroundColor:["gray"],
        // borderRadius:5,
        borderColor:"gray",
        borderWidth:2,
    }
    ,
    {
        label:"Clothing", 
        data:SalesData.map((data) => data.Clothing),
        backgroundColor:["black"],
        // borderRadius:5,
        borderColor:"black",
        borderWidth:2,
    },
    {
        label:"Groceries", 
        data:SalesData.map((data) => data.Groceries),
        backgroundColor:["pink"],
        // borderRadius:5,
        borderColor:"pink",
        borderWidth:2,
    },
]
});
// ======================================================Pie Chart=====================================================

const [fruitConsumption, setfruitConsumption] = useState({
    labels:FruitConsumption.map((data) => data.Fruit),
    datasets:[
    {
        label:"Servings",
        data:FruitConsumption.map((data) => data.Servings),
        backgroundColor:["green","blue","skyblue","red","orange","violet"],
        // borderRadius:5,
        borderColor:"black",
        borderWidth:2,
    }
]
});

// ========================================================Polar Chart=============================================================

const [monthlySalesData, setmonthlySalesData] = useState({
    labels:MonthlySalesData.map((data) => data.Month),
    datasets:[
    {
        label:"Sales",
        data:MonthlySalesData.map((data) => data.Sales),
        backgroundColor:[
            "green",
            "blue",
            "skyblue",
            "red",
            "orange",
            "black",
            "pink",
            "yellow",
            "purple",
            "brown",
            "maroon",
            "teal",
        ],
        // borderRadius:5,
        borderColor:"black",
        borderWidth:2,
    }
]
});

  return (
    <div className='Dashboard'>
        <SideBar/>
        <div className="all">
            <div className="nav">
                <img src="./src/components/Dashboard/assets/mastercard.svg" alt="g" className="master" />
                <div className="searchbar">
                    <input type="search" placeholder="Search" className="search" />
                       <img src="./src/components/Dashboard/assets/search.svg" alt="rt" className="search1" />
                </div>
                <div className="icon">
                       <img src="./src/components/Dashboard/assets/bell.svg" alt="rt" className="bell" />
                       <img src="./src/components/Dashboard/assets/setting.png" alt="rt" className="setting" />
                </div>
            </div>
            <div className="BP">
                <div className="chart">
                   <div className="title">
                       <h2>Bar Chart</h2>
                   </div>
                   <div style={{width:850, height:400}}>
                       <BarChart chartData={userData1}/> 
                   </div>
                </div>
                <div className="chart">
                   <div className="title">
                       <h2>Pie Chart</h2>
                   </div>
                   <div style={{width:400, height:400}}>
                        <PieChart chartData={fruitConsumption}/> 
                    </div>
                </div>
            </div>
    
            <div className="BP">
                <div className="chart">
                   <div className="title">
                       <h2>Line Chart</h2>
                   </div>
                   <div style={{width:850, height:400}}>
                        <LineChart chartData={salesData}/> 
                    </div>
                </div>
                <div className="chart">
                   <div className="title">
                       <h2>Polar Chart</h2>
                   </div>
                   <div style={{width:400, height:400}}>
                        <PolarAreaChart chartData={monthlySalesData}/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard