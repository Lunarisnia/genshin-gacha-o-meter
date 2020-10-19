import React, { useEffect } from "react";
import { BannerGrid } from "../components/BannerGrid";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../features/banners/bannerSlice";

const Homepage = () => {
  let content;
  const dispatch = useDispatch();
  const { status, value } = useSelector((state) => state.banner);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getBanners());
    }
  }, [status, dispatch]);
  if (status === "succeeded") {
    content = (
      <div>
        <h1 style={{ size: "50%", color: "white" }}>Genshin Gacha'O Meter</h1>
        <BannerGrid banners={value} />
      </div>
    );
  } else {
    content = <h1>LOADING GAN</h1>;
  }
  return content;
};

export default Homepage;
