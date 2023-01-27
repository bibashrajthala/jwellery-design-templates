import React from "react";

import "../styles/userProfile.css";

import DocumentImage from "../assets/document1.png";
import UserProfileImage from "../assets/UserProfileImage.png";

const UserProfile = () => {
  return (
    <div className="profile">
      <h3 className="profile__heading">User Profile</h3>

      <div className="profile__info-container">
        <div className="profile__info-personal">
          <div className="profile__user-img-container">
            <img
              src={UserProfileImage}
              alt="UserProfileImage"
              className="profile_user-img"
            />
          </div>
          <h3 className="profile__user-name">Anish Bajracharya</h3>
          <h4 className="profile__info-heading">personal information</h4>
          <div className="profile__info-personal-details">
            <div className="profile__info-texts">
              <p className="profile__info-title">Father's Name</p>
              <p className="profile__info-text">Asha Ratna Bajracharya</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Mother's Name</p>
              <p className="profile__info-text">Manisha Bajracharya</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Grandfather's Name</p>
              <p className="profile__info-text">Asha Ratna Bajracharya</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Gender</p>
              <p className="profile__info-text">Male</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Marital Status</p>
              <p className="profile__info-text">Married</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Spouse's Name</p>
              <p className="profile__info-text">Mila Bajracharya</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Occupation</p>
              <p className="profile__info-text">Private Sector</p>
            </div>
            <div className="profile__info-texts">
              <p className="profile__info-title">Date of Birth</p>
              <p className="profile__info-text">20 August, 1987</p>
            </div>
          </div>
        </div>
        <div className="profile__info-others">
          <div className="profile_info-adddress">
            <h4 className="profile__info-heading">address information</h4>

            <div className="profile__info-address-details">
              <div className="profile__info-texts">
                <p className="profile__info-title">Province</p>
                <p className="profile__info-text">Bagmati Province</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">District</p>
                <p className="profile__info-text">Kathmandu</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">Municipality</p>
                <p className="profile__info-text">Kathmandu Municipalitya</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">Ward No.</p>
                <p className="profile__info-text">35</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">Current Address</p>
                <p className="profile__info-text">Indrachowk</p>
              </div>
            </div>
          </div>
          <div className="profile_info-identity">
            <h4 className="profile__info-heading">Identity information</h4>

            <div className="profile__info-identity-details">
              <div className="profile__info-texts">
                <p className="profile__info-title">Identity Type</p>
                <p className="profile__info-text">Citizenship</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">ID Number</p>
                <p className="profile__info-text">345678996543345</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">Place of Issue</p>
                <p className="profile__info-text">Kathmandu</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">Date of Issue</p>
                <p className="profile__info-text">324 September, 2002</p>
              </div>
              <div className="profile__info-texts">
                <p className="profile__info-title">PAN / VAT No.</p>
                <p className="profile__info-text">876544567</p>
              </div>
            </div>
          </div>
          <div className="profile_info-documents">
            <h4 className="profile__info-heading">Identity information</h4>

            <div className="profile__info-documents-details">
              <div className="profile__info-doc-container">
                <p className="profile__info-title">Document Front</p>
                <div className="profile__info-img-container">
                  <img
                    src={DocumentImage}
                    alt="DocumentImage"
                    className="profile__info-img"
                  />
                </div>
              </div>
              <div className="profile__info-doc-container">
                <p className="profile__info-title">Document Back</p>
                <div className="profile__info-img-container">
                  <img
                    src={DocumentImage}
                    alt="DocumentImage"
                    className="profile__info-img"
                  />
                </div>
              </div>
              <div className="profile__info-doc-container">
                <p className="profile__info-title">PAN / VAT Certificate</p>
                <div className="profile__info-img-container">
                  <img
                    src={DocumentImage}
                    alt="DocumentImage"
                    className="profile__info-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
