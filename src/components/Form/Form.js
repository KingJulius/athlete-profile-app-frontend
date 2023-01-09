import React, { useState } from "react";
import About from "../About/About";
import BasicInfo from "../BasicInfo/BasicInfo";
import Summary from "../Summary/Summary";
import styles from "./Form.module.css";
import axios from "axios";
import MyProfile from "../MyProfile/MyProfile";

const Form = () => {
  const [page, setPage] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    profileImage: [],
    dateOfBirth: "",
    gender: "",
    location: "",
    team: "",
    about: "",
    sports: "",
  });

  const formTitles = ["Basic Info", "About", "Summary", "My Profile"];
  const pageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <About formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Summary formData={formData} setFormData={setFormData} />;
    } else {
      return <MyProfile formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={styles["form"]}>
      <br />
      <div className={styles["progressbar"]}>
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className={styles["form-container"]}>
        <div className={styles["header"]}>
          <h1>{formTitles[page]}</h1>
        </div>
        <div className={styles["body"]}>{pageDisplay()}</div>
        {showButtons && (
          <div className={styles["footer"]}>
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              disabled={page === 0}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === formTitles.length - 2) {
                  axios
                    .post(process.env.REACT_APP_SERVER_URL+"/api/create-profile", formData)
                    .then((response) => response.data)
                    .then((result) => {
                      setPage((currPage) => currPage + 1);
                      setShowButtons(false);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === formTitles.length - 2 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
      <br />
    </div>
  );
};

export default Form;
