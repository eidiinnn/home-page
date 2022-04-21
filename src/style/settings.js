import styled from "styled-components";

const primaryColor = "#464649";
const secondaryColor = "#6E3E8A";
const normalTextColor = "#bcbcbd";
const whiteColor = "#ffffff";
const backgroundColor = "#151519";

export const OpenSettingsModalIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 1.25rem;
  margin-left: 1.25rem;

  color: white;
  font-size: 1.35rem;

  transition: 500ms;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const ModalDisplay = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: #1010106b;

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  font-family: "sora";
  background-color: ${backgroundColor};
  color: white;

  width: 500px;
  max-height: 90%;
  padding: 1.25rem;
  border-radius: 2px;
`;

export const ModalTitles = styled.h1`
  font-size: 0.83rem;
  font-weight: 700;
  color: ${whiteColor};
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.row ? "space-between" : "left")};
  align-items: ${(props) => (props.row ? "center" : "left")};
  margin-bottom: ${(props) => (props.noBottomMargin ? "0" : "0.4rem")};
  margin-top: ${(props) => (props.noTopMargin ? "0" : " 0.5rem")};
`;

export const DefaultButton = styled.button`
  font-family: "sora";
  font-weight: 700;
  font-size: 0.75rem;
  background-color: ${primaryColor};
  color: ${normalTextColor};

  padding: 0.21rem 1rem 0.21rem 1rem;
  margin: 0 !important;
  border-radius: 2px;
  border: 0;

  width: 80px;
  transition: 500ms;

  &:hover {
    background-color: ${secondaryColor};
  }
`;

export const DefaultRage = styled.input`
  width: 100%;
  appearance: none;

  &::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${secondaryColor};
    -webkit-appearance: none;
    margin-top: -0.4rem;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: ${primaryColor};
    border-radius: 2px;
    -webkit-appearance: none;
  }

  &::-moz-range-progress {
    background: ${primaryColor};
    -webkit-appearance: none;
  }
`;

export const Upload = styled.input`
  &::-webkit-file-upload-button {
    font-family: "sora";
    font-weight: 700;
    font-size: 0.75rem;
    background-color: ${primaryColor};
    color: ${normalTextColor};

    padding: 0.21rem 1rem 0.21rem 1rem;
    margin-right: 0.5rem;
    border-radius: 2px;
    border: 0;

    transition: 500ms;

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;

export const TimezoneSelect = styled.select`
  font-family: "sora";
  font-weight: 700;
  font-size: 0.75rem;
  background-color: ${primaryColor};
  color: ${normalTextColor};

  padding: 0.21rem 0.5rem 0.21rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 2px;
  border: 0;

  transition: 500ms;

  &:hover {
    background-color: ${backgroundColor};
  }
`;

export const CloseIcon = styled.div`
  font-size: 1.5rem;
  color: ${primaryColor};
  display: flex;
  align-items: center;

  transition: 500ms;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const SupportMeLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.62rem;

  font-size: 0.77rem;
  color: ${secondaryColor} !important;
  text-align: center;
  font-weight: 700;
`;

export const SupportMeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.18rem;
  font-size: 1rem;
`;

export const BookmarkInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BookmarkInputs = styled.input`
  width: 300px;
  height: 20px;
  border: 0;
  border-radius: 2px;
  margin-bottom: 0.31rem;
  font-family: "roboto";
  font-weight: 400;

  background-color: ${primaryColor};
  color: ${normalTextColor};
`;

export const BookmarkInputRemove = styled.div`
  font-size: 1.3rem;
  margin-left: 0.35rem;
  color: ${primaryColor};

  transition: 500ms;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const CropImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const CropImageRangeContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  font-size: 1.7rem;
  color: ${whiteColor};
  margin-top: 0.4rem;
  margin-bottom: 0.25rem;

  justify-content: right;
  align-items: center;
`;
