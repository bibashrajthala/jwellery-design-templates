import React from "react";

import DocumentImage from "../assets/document1.png";
import UserProfileImage from "../assets/UserProfileImage.png";
import "../styles/agentProfile.css";

const AgentProfile = () => {
  return (
    <div className="agent">
      <h3 className="agent__heading">Agent Profile</h3>

      <div className="agent__info-container">
        <div className="agent__info agent__info-personal">
          <h4 className="agent__info-heading">personal information</h4>

          <div className="agent__info-personal-container">
            <div className="agent__imgAndName">
              <div className="agent__user-img-container">
                <img
                  src={UserProfileImage}
                  alt="UserProfileImage"
                  className="agent_user-img"
                />
              </div>
              <h3 className="agent__user-name">Anish Bajracharya</h3>
            </div>
            <div className="agent__info-personal-details">
              <div className="agent__info-texts">
                <p className="agent__info-title">Father's Name</p>
                <p className="agent__info-text">Asha Ratna Bajracharya</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Mother's Name</p>
                <p className="agent__info-text">Manisha Bajracharya</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Grandfather's Name</p>
                <p className="agent__info-text">Asha Ratna Bajracharya</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Gender</p>
                <p className="agent__info-text">Male</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Marital Status</p>
                <p className="agent__info-text">Married</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Spouse's Name</p>
                <p className="agent__info-text">Mila Bajracharya</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Occupation</p>
                <p className="agent__info-text">Private Sector</p>
              </div>
              <div className="agent__info-texts">
                <p className="agent__info-title">Date of Birth</p>
                <p className="agent__info-text">20 August, 1987</p>
              </div>
            </div>
          </div>
        </div>

        <div className="agent__info agent_info-adddress">
          <h4 className="agent__info-heading">address information</h4>

          <div className="agent__info-address-details">
            <div className="agent__info-texts">
              <p className="agent__info-title">Province</p>
              <p className="agent__info-text">Bagmati Province</p>
            </div>
            <div className="agent__info-texts">
              <p className="agent__info-title">District</p>
              <p className="agent__info-text">Kathmandu</p>
            </div>
            <div className="agetn__info-texts">
              <p className="agent__info-title">Municipality</p>
              <p className="agent__info-text">Kathmandu Municipalitya</p>
            </div>
            <div className="agetn__info-texts">
              <p className="agent__info-title">Ward No.</p>
              <p className="agent__info-text">35</p>
            </div>
            <div className="agetn__info-texts">
              <p className="agent__info-title">Current Address</p>
              <p className="agent__info-text">Indrachowk</p>
            </div>
          </div>
        </div>
        <div className="agent__info agent_info-identity">
          <h4 className="agent__info-heading">Identity information</h4>

          <div className="agent__info-identity-details">
            <div className="agent__info-texts">
              <p className="agent__info-title">Identity Type</p>
              <p className="agent__info-text">Citizenship</p>
            </div>
            <div className="agent__info-texts">
              <p className="agent__info-title">ID Number</p>
              <p className="agent__info-text">345678996543345</p>
            </div>
            <div className="agent__info-texts">
              <p className="agent__info-title">Place of Issue</p>
              <p className="agent__info-text">Kathmandu</p>
            </div>
            <div className="agent__info-texts">
              <p className="agent__info-title">Date of Issue</p>
              <p className="agent__info-text">324 September, 2002</p>
            </div>
            <div className="agent__info-texts">
              <p className="agent__info-title">PAN / VAT No.</p>
              <p className="agent__info-text">876544567</p>
            </div>
          </div>
        </div>
        <div className="agent__info agent_info-documents">
          <h4 className="agent__info-heading">Identity information</h4>

          <div className="agent__info-documents-details">
            <div className="agent__info-doc-container">
              <p className="agent__info-title">Document Front</p>
              <div className="agent__info-img-container">
                <img
                  src={DocumentImage}
                  alt="DocumentImage"
                  className="agent__info-img"
                />
              </div>
            </div>
            <div className="agent__info-doc-container">
              <p className="agent__info-title">Document Back</p>
              <div className="agent__info-img-container">
                <img
                  src={DocumentImage}
                  alt="DocumentImage"
                  className="agent__info-img"
                />
              </div>
            </div>
            <div className="agent__info-doc-container">
              <p className="agent__info-title">PAN / VAT Certificate</p>
              <div className="agent__info-img-container">
                <img
                  src={DocumentImage}
                  alt="DocumentImage"
                  className="agent__info-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
