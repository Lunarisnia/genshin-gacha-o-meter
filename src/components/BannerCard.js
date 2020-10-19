import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function BannerCard({ bannerData }) {
  const history = useHistory();
  return (
    <Card
      // style={{ width: "20rem", margin: "50px" }}
      className="Banner-card"
      onClick={() => history.push(`/banner/${bannerData.id}`)}
    >
      <Card.Img variant="top" src={bannerData.imgUrl} />
      <Card.Body>
        <Card.Title>{bannerData.title}</Card.Title>
        <Card.Text>{bannerData.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{bannerData.expiry}</small>
      </Card.Footer>
    </Card>
  );
}
