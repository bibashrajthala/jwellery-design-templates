import React from "react";

import NcellSimSvg from "../assets/ncellSimSvg.svg";
import NtcSimSvg from "../assets/ntcSimSvg.svg";
import SmartSimSvg from "../assets/smartSimSvg.svg";

import { BsSimFill, BsSim } from "react-icons/bs";

import "../styles/simDashboard.css";

const SimDashboard = () => {
  return (
    <div className="sim">
      <div className="sim__active-container">
        <div className="sim__active">
          <div className="sim__active-icon-container">
            {/* <img src={BsSimFill} alt="BsSimFill" className="sim__active-icon" /> */}
            <BsSimFill className="sim__active-icon" />
          </div>
          <div className="sim__active-texts">
            <p className="sim__active-text">Total Active SIMs</p>
            <p className="sim__active-number">19543</p>
          </div>
        </div>
        <div className="sim__active">
          <div className="sim__active-icon-container">
            {/* <img src={BsSim} alt="BsSim" className="sim__active-icon" /> */}
            <BsSim className="sim__active-icon" />
          </div>
          <div className="sim__active-texts">
            <p className="sim__active-text">Total In-Active SIMs</p>
            <p className="sim__active-number">492</p>
          </div>
        </div>
      </div>

      <div className="sim__types-container">
        <div className="sim__types">
          <div className="sim__type sim__type-ntc">
            <div className="sim__type-icon-container">
              <img src={NtcSimSvg} alt="NtcSimSvg" className="sim__type-icon" />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">Active NTC SIMs</p>
              <p className="sim__type-number">8543</p>
            </div>
          </div>
          <div className="sim__type sim__type-ntc">
            <div className="sim__type-icon-container">
              <img src={NtcSimSvg} alt="NtcSimSvg" className="sim__type-icon" />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">In-Active NTC SIMs</p>
              <p className="sim__type-number">153</p>
            </div>
          </div>
        </div>
        <div className="sim__types">
          <div className="sim__type sim__type-ncell">
            <div className="sim__type-icon-container">
              <img
                src={NcellSimSvg}
                alt="NcellSimSvg"
                className="sim__active-icon"
              />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">Active NCELL SIMs</p>
              <p className="sim__type-number">7253</p>
            </div>
          </div>
          <div className="sim__type sim__type-ncell">
            <div className="sim__type-icon-container">
              <img
                src={NcellSimSvg}
                alt="NcellSimSvg"
                className="sim__type-icon"
              />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">In-Active NCELL SIMs</p>
              <p className="sim__type-number">246</p>
            </div>
          </div>
        </div>
        <div className="sim__types">
          <div className="sim__type sim__type-smart">
            <div className="sim__type-icon-container">
              <img
                src={SmartSimSvg}
                alt="SmartSimSvg"
                className="sim__type-icon"
              />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">Active Smart Cell SIMs</p>
              <p className="sim__type-number">2738</p>
            </div>
          </div>
          <div className="sim__type sim__type-smart">
            <div className="sim__type-icon-container">
              <img
                src={SmartSimSvg}
                alt="SmartSimSvg"
                className="sim__type-icon"
              />
            </div>
            <div className="sim__type-texts">
              <p className="sim__type-text">In-Active Smart Cell SIMs</p>
              <p className="sim__type-number">85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimDashboard;
