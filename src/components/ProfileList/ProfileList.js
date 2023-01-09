import styles from "./ProfileList.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

const ProfileList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.REACT_APP_SERVER_URL+"/api/get-profiles")
      .then((response) => {
        setData(response.data["data"]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles["profilelist"]}>
      <div className={styles["profilelist-container"]}>
        <div className={styles["header"]}>
          <h1>Profile List</h1>
        </div>
        <br />
        <br />
        {isLoading ? (
          <>
            <Spinner
              animation="border"
              role="status"
              className={styles["spinner"]}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <br /> <br />
          </>
        ) : (
          <div className={styles["body"]}>
            {data &&
              data.map((item) => (
                <div key={item._id}>
                  <p>
                    <h6>Name: </h6>
                    {item.name}
                  </p>
                  <p>
                    <h6>Description: </h6>
                    {item.description}
                  </p>
                  <p>
                    <h6>Profile Image: </h6>{" "}
                    <Image
                      src={item.profileImage}
                      style={{ width: "20%", height: "10%" }}
                    ></Image>
                  </p>
                  <p>
                    <h6>Date of Birth: </h6> {item.dateOfBirth}
                  </p>
                  <p>
                    <h6>Gender: </h6> {item.gender}
                  </p>
                  <p>
                    <h6>Location: </h6> {item.location}
                  </p>
                  <p>
                    <h6>Team: </h6> {item.team}
                  </p>
                  <p>
                    <h6>About: </h6> {item.about}
                  </p>
                  <p>
                    <h6>Sports: </h6> {item.sports}
                  </p>
                  <hr />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
