import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./About.module.css";

const About = ({ formData, setFormData }) => {
  return (
    <div className={styles["about-container"]}>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="location" className={styles["label"]}>
          Location:
        </Form.Label>
        <Form.Control
          type="text"
          id="location"
          value={formData.location}
          onChange={(event) =>
            setFormData({ ...formData, location: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label htmlFor="team" className={styles["label"]}>
          Team:
        </Form.Label>
        <Form.Control
          type="text"
          id="team"
          value={formData.team}
          onChange={(event) =>
            setFormData({ ...formData, team: event.target.value })
          }
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-1">
        <Form.Label htmlFor="about" className={styles["label"]}>
          About:
        </Form.Label>
        <Form.Control
          type="text"
          id="about"
          value={formData.about}
          onChange={(event) =>
            setFormData({ ...formData, about: event.target.value })
          }
        />
      </Form.Group>
      <br />
      <br />
    </div>
  );
};

export default About;
