import React from "react";
import { Card } from "react-bootstrap";

export function BannerCard({ bannerData }) {
  return (
    <Card
      // style={{ width: "20rem", margin: "50px" }}
      className="Banner-card"
      onClick={() => alert(bannerData.title)}
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
