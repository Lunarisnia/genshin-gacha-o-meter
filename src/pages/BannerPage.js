import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBanners } from "../features/banners/bannerSlice";
import { Counter } from "../features/counter/Counter";

export function BannerPage() {
  const dispatch = useDispatch();
  const bannerData = useSelector((state) => state.banner.value);
  const bannerStatus = useSelector((state) => state.banner.status);
  useEffect(() => {
    if (bannerStatus === "idle") {
      dispatch(getBanners());
    }
  }, [bannerStatus, dispatch]);
  const { id } = useParams();
  let content;
  if (bannerStatus === "succeeded") {
    content = (
      <div className="Banner-info">
        <Image src={bannerData[id - 1].imgUrl} style={{ width: "50rem" }} />
        <h1>{bannerData[id - 1].title}</h1>
        <Counter />
      </div>
    );
  } else {
    content = <h1>Loading Gan</h1>;
  }

  return <div>{content}</div>;
}
