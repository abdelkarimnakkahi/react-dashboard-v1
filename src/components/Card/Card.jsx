import "./Card.css";

import React, { useState } from 'react';

import {motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {UilTimes} from "@iconscout/react-unicons";

import Chart from "react-apexcharts";
import { type } from "@testing-library/user-event/dist/type";
import { color } from "@mui/system";
import { Tooltip } from "@mui/material";

function Card(props) {

    const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout >
        {expanded? 
          <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} /> : 
          <CompactCard param = {props} setExpanded={()=>setExpanded(true)} />}
    </AnimateSharedLayout > 
  )
}

function CompactCard({param, setExpanded}){

  const Png = param.icon;

  return(
    <motion.div className="compact-card"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radial-bar">
        <CircularProgressbar 
          value={param.barValue}
          text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

function ExpandedCard({param, setExpanded}){

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      Tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid:{
        show: true
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-9-19T00:00:00.000Z",
          "2018-9-19T01:00:00.000Z",
          "2018-9-19T02:00:00.000Z",
          "2018-9-19T03:00:00.000Z",
          "2018-9-19T04:00:00.000Z",
          "2018-9-19T05:00:00.000Z",
          "2018-9-19T06:00:00.000Z",
        ]
      }

    }
  }

  return(
    <motion.div className="expanded-card"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow
      }}
      layoutId="expandableCard"
    >
      <div className="radial-bar">
       <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
     <div className="chart-container">
        <Chart series={param.series} type="area" options={data.options} />
     </div>
     <span>Last 24 hours</span>
    </motion.div>
  )
}

export default Card;