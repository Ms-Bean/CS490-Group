import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const ViewReviews = ({ reviews = [] }) => {
  const coachName = "Brad Pitt"; // Sample coach name

  // Sample reviews
  const hardcodedReviews = [
    {
      starRating: 5,
      textReview: "Amazing coach, really helped me improve!",
      date: "2023-10-20",
      clientName: "Alice Johnson",
    },
    {
      starRating: 3,
      textReview: "The session was okay, but could be better.",
      date: "2023-09-15",
      clientName: "Bob Smith",
    },
    {
      starRating: 4,
      textReview: "",
      date: "2023-08-30",
      clientName: "Charlie Brown",
    },
  ];

  const allReviews = [...hardcodedReviews, ...reviews];
  const totalRatings = allReviews.length;

  const getAverageRating = () => {
    if (allReviews.length === 0) return 0;
    const totalStars = allReviews.reduce((acc, review) => acc + review.starRating, 0);
    return (totalStars / allReviews.length).toFixed(1);
  };

  const averageRating = getAverageRating();

  return (
    <Container>
      <h3>Reviews for Coach {coachName}</h3>
      <Row>
        <Col>
          <div className="average" style={{ display: "inline-block", lineHeight: "5px" }}>
            {averageRating}&nbsp;
            <StarRatings
              rating={parseFloat(averageRating)}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="1px"
            />
            &nbsp;
            <span className="ml-2">{totalRatings} ratings</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ListGroup style={{ marginTop: "20px" }}>
            {allReviews.map((review, index) => (
              <ListGroup.Item key={index}>
                {review.clientName && <span className="ml-2">{`${review.clientName}`}</span>}
                <p>
                  <StarRatings
                    rating={review.starRating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="1px"
                  />
                </p>
                {review.textReview && <p>{review.textReview}</p>}
                {review.date && <small className="text-muted">{new Date(review.date).toLocaleDateString()}</small>}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewReviews;
