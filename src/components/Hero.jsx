import React from "react"
import Typography from "antd";
import "../css/Hero.css"
import Title from "antd/lib/skeleton/Title";

export default function Hero() {
  return (
    <div className="hero" style={{  }}>
      <div className="hero-container"
        style={{
          height: "100%",
        }}
        >
        <div className="inner-container"
          style={{
            paddingTop: "15%",
            paddingLeft: "15%",
            width: "min(850px, 90vw)",
          }}
        >
          <Title>Michigan's Premier Autonomous Vehicles Team</Title>
          {/* <h1 style={{ fontSize: "calc(1vw + 3.2em)", letterSpacing: "1px", fontWeight: "700" }}>Michigan's Premier Autonomous Vehicles Team</h1> */}
        </div>
      </div>
    </div>
  )
}
