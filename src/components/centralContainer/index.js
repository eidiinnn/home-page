import React from "react";
import BookmarkList from "./parts/bookmark/BookmarkList";
import ClockComponent from "./parts/clockComponent";
import ImageDiv from "../../image/getDivImage";
import { useSelector } from "react-redux";

import {
  MainContainer,
  ClockAndBookmarkContainer,
} from "../../style/centralContainer.js";

export default function CentralContainer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <ImageDiv type="image" />
      <ClockAndBookmarkContainer>
        <ClockComponent />
        <BookmarkList />
      </ClockAndBookmarkContainer>
    </MainContainer>
  );
}
