import React from "react";
import { CardDeck, Container } from "react-bootstrap";
import { BannerCard } from "./BannerCard";

export function BannerGrid({banners}) {
  function getBanner() {
    let list = [];
    const deck = [];
    banners.forEach(async (bannerData, i) => {
      list.push(<BannerCard bannerData={bannerData} key={i} />);
      if ((i + 1) % 3 === 0 || i === banners.length - 1) {
        deck.push(<CardDeck style={{ margin: "50px" }}>{list}</CardDeck>);
        list = [];
      }
    });
    return deck;
  }
  return <Container>{getBanner()}</Container>;
}
