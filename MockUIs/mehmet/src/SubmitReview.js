import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const SubmitReview = ({ addReview }) => {
  const [starRating, setStarRating] = useState(0);
  const [textReview, setTextReview] = useState("");
  const [charCount, setCharCount] = useState(0);

  const coachName = "Coach Steve";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (starRating === 0) {
      alert("Please select a star rating before submitting.");
    } else {
      addReview({ starRating, textReview });
      resetForm();
    }
  };

  const handleTextChange = (e) => {
    const newReview = e.target.value;
    if (newReview.length <= 500) {
      setTextReview(newReview);
      setCharCount(newReview.length);
    } else {
      alert("Review exceeds the maximum character limit of 500.");
    }
  };

  const resetForm = () => {
    setStarRating(0);
    setTextReview("");
    setCharCount(0);
  };

  return (
    <Container>
      <h2>Rate {coachName}</h2>
      <Form onSubmit={handleSubmit}>
        <p>
          <Row>
            <Col md={6}>
              <StarRatings
                rating={starRating}
                starRatedColor="gold"
                starHoverColor="gold"
                changeRating={(newRating) => setStarRating(newRating)}
                numberOfStars={5}
                starDimension="40px"
                name="rating"
              />
            </Col>
          </Row>
        </p>
        <Row>
          <Col md={6}>
            <Form.Group controlId="textReview">
              <Form.Control as="textarea" rows={3} value={textReview} onChange={handleTextChange} placeholder="Write a review (optional)" />
              <Form.Text muted>{charCount}/500</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Submit</Button>&nbsp;
            <Button variant="secondary" onClick={resetForm}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SubmitReview;
