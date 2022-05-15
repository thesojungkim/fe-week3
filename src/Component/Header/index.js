import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";

const StyledHeader = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100")};
  background-color: #343a40;
  height: ${(props) => (props.height ? props.height : "100")};
`;

const Header = (props) => {
  return (
    <div>
      <StyledHeader width={props.width} height={props.height}>
        <TextBox
          text_align={props.text_align}
          fontSize={props.fontSize}
          margin_top={props.margin_top}
          margin_left={props.margin_left}
          color="white"
        >
          {props.children}
        </TextBox>
      </StyledHeader>
    </div>
  );
};
export default Header;
