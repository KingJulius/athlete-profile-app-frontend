import styles from "./MyProfile.module.css";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
const MyProfile = ({ formData, setFormData }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Alert
          variant="success"
          className="mt-4"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>
            Your Profile has been succesfully created!
          </Alert.Heading>
        </Alert>
      )}
      <div className={styles["myprofile"]}>
        <div className={styles["myprofile-container"]}>
          <div className={styles["body"]}>
            <Image
              src={formData.profileImage}
              className={styles["image"]}
            ></Image>
            <Form.Label className={styles["label"]}>
              Name: {formData.name}
            </Form.Label>
            <Form.Label className={styles["label"]}>
              Date of Birth: {formData.dateOfBirth}
            </Form.Label>
            <Form.Label className={styles["label"]}>
              Gender: {formData.gender}
            </Form.Label>
            <Form.Label className={styles["label"]}>
              Location: {formData.location}
            </Form.Label>
            <Form.Label className={styles["label"]}>
              Team: {formData.team}
            </Form.Label>
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
        </div>
      </div>
    </>
  );
};
export default MyProfile;
