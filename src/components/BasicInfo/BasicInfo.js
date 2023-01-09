import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./BasicInfo.module.css";
import { sportsList } from "../../data";
import FileBase64 from "react-file-base64";
import MultiSelect from "react-multiple-select-dropdown-lite";

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className={styles["basic-info-container"]}>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="name" className={styles["label"]}>
          Name:
        </Form.Label>
        <Form.Control
          className={styles["input"]}
          type="text"
          id="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-1">
        <Form.Label htmlFor="profileImage" className={styles["label"]}>
          Profile Image:{" "}
        </Form.Label>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setFormData({ ...formData, profileImage: base64 })
          }
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-1">
        <Form.Label htmlFor="profileImage" className={styles["label"]}>
          Sports:{" "}
        </Form.Label>
        <MultiSelect
          options={sportsList}
          onChange={(event) => {
            setFormData({ ...formData, sports: event });
          }}
          defaultValue={formData.sports}
          className={styles["multiselect"]}
        ></MultiSelect>
      </Form.Group>
      <br />
      <Form.Group className="mb-1">
        <Form.Label htmlFor="dateOfBirth" className={styles["label"]}>
          Date of Birth:{" "}
        </Form.Label>
        <Form.Control
          className={styles["input"]}
          type="date"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(event) =>
            setFormData({ ...formData, dateOfBirth: event.target.value })
          }
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-1">
        <Form.Label htmlFor="gender" className={styles["label"]}>
          Gender:{" "}
        </Form.Label>
        <Form.Select
          className={styles["select"]}
          id="gender"
          value={formData.gender}
          onChange={(event) =>
            setFormData({ ...formData, gender: event.target.value })
          }
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>
      <br />
    </div>
  );
};

export default BasicInfo;
