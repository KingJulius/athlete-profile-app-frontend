import Form from "react-bootstrap/Form";
import styles from "./Summary.module.css";
import React from "react";
import Image from "react-bootstrap/Image";

const Summary = ({ formData, setFormData }) => {
  return (
    <div className={styles["summary-container"]}>
      <Image src={formData.profileImage} className={styles["image"]}></Image>
      <Form.Label className={styles["label"]}>Name: {formData.name}</Form.Label>
      <Form.Label className={styles["label"]}>
        Date of Birth: {formData.dateOfBirth}
      </Form.Label>
      <Form.Label className={styles["label"]}>
        Gender: {formData.gender}
      </Form.Label>
      <Form.Label className={styles["label"]}>
        Location: {formData.location}
      </Form.Label>
      <Form.Label className={styles["label"]}>Team: {formData.team}</Form.Label>
      <Form.Label className={styles["label"]}>
        About: {formData.about}
      </Form.Label>
      <Form.Label className={styles["label"]}>
        Sports: {formData.sports}
      </Form.Label>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Summary;
