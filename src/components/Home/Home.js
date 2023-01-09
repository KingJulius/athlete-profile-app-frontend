import styles from "./Home.module.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles["home"]}>
        <div className={styles["home-container"]}>
          <div className={styles["button"]}>
            <Link to="/form">
              <Button variant="primary" size="lg">
                Go  To  Form
              </Button>
            </Link>
          </div>
          <div className={styles["button"]}>
            <Link to="/profile-list">
              <Button variant="secondary" size="lg">
                Display List
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
