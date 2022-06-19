# 멋쟁이 사자처럼 10기 FE 3주차 과제 설계 방식과 코드 설명🦁

### 1. 상단바

##### 1-1 Header 컴포넌트

```
const StyledHeader = styled.div`
display: flex; justify-content:
center; align-items: center;
width: ${(props) => (props.width ? props.width : "100")}; background-color: #343a40;
height: ${(props) => (props.height ? props.height : "100")};
margin: 0;
padding: 0;`;
```

- 상단바의 틀이 되는 박스이다. -하지만 여기서 margin과 padding에 0을 주어도 여백이 남는 문제가 발생

#### 문제해결 -> Global 컴포넌트

```
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

- {
  margin: 0;

      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

  }
  `;
  export default GlobalStyle;

```

- GlobalStyle 을 통해 margin: 0;을 설정하면 여백이 사라진다.
- 앞으로 나올 콘텐츠에 사용될 폰트도 Global 컴포넌트에 적었다.

##### 1-2 아이콘

```
import { FiCamera } from "react-icons/fi";
//카메라모양 리액트 아이콘을 불러왔다.//
 const Icon = styled.div`
 display: flex; justify-content:
 center; align-items:
 margin-right: 8px;`;
```

###### 아이콘을 감싸는 Icon

```
  const Icon = styled.div`
  display: flex; justify-content: center; align-items: center; margin-right: 8px;`;
```

- 아이콘의 위치를 조정하기위해 만들었다.

##### 1-3 텍스트박스

###### TextBox 컴포넌트

```
const StyledText = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.5;
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "bold")};
  margin-left: ${(props) => (props.margin_left ? props.margin_left : "0cm")};
  margin-top: ${(props) => (props.margin_top ? props.margin_top : "0cm")};
  margin-bottom: ${(props) =>
    props.margin_bottom ? props.margin_bottom : "0px"};
  text-align: ${(props) => (props.text_align ? props.text_align : "right")};
`;
//변경이 필요한 태그에는 삼항연산자를 사용하여 기본값을 주었다. //

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      margin_top={props.margin_top}
      margin_bottom={props.margin_bottom}
      margin_left={props.margin_left}
      font_weight={props.fontWeight}
      font_size={props.fontSize}
      text_align={props.text_align}
    >
      {" "}
      {props.children}
    </StyledText>
  );
};

export default TextBox;
```

###### 텍스트박스를 감싸는 Wrapper

```
const Wrapper = styled.div`
display: flex; align-items:
flex-end;
width: 75%;`;
```

```

const Header = (props) => {
return (
<StyledHeader width={props.width} height={props.height}>
<Icon>
<FiCamera color="white" size="24" />
</Icon>
<Wrapper>
<TextBox fontSize={props.fontSize} color="white">
Album
</TextBox>
</Wrapper>
</StyledHeader>
);
};
export default Header;
```

##### 상단바 App.js

```
 <GlobalStyle></GlobalStyle>
      <Header color="white" width="100%" height="55px" fontSize="20px"></Header>
```

### 2.중앙 문구 & 버튼

##### 2-1 Color 컴포넌트

```
import React from "react";
import styled from "styled-components";

const Color = styled.div`
  background-color: ${(props) =>
    props.background_color ? props.background_color : "white"};
`;
export default Color;
```

- 이 부분의 백그라운드 컬러를 화이트로 설정하기 위해서 Color라는 컴포넌트를 만들었다.

##### 2-2 Button 컴포넌트

```
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 37px;
  width: 155px;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 5mm;
  margin-bottom: 20px;
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton
      position={props.position}
      backgroundColor={props.backgroundColor}
      color={props.color}
      border={props.border}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

```

- flex를 통해서 버튼의 위치를 조정하고 변경할 것 같은 태그에는 삼항연산자로 기본값을 주었다.

##### 2-3 문구&버튼을 한번에 감싸는 CenterWrapper 컴포넌트

```
const CenterWrapper = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : "0px")};
  justify-content: center;
  align-items: center;
  justify-content: ${(props) =>
    props.justify_content ? props.justify_content : "between"};
  flex-direction: ${(props) =>
    props.flex_direction ? props.flex_direction : "row"};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-top: ${(props) => (props.margin_top ? props.margin_top : "0px")};
  margin-bottom: ${(props) =>
    props.margin_bottom ? props.margin_bottom : "0px"};
  padding-top: ${(props) => (props.padding_top ? props.padding_top : "0px")};
  padding-bottom: ${(props) =>
    props.padding_bottom ? props.padding_bottom : "0px"};
`;
export default CenterWrapper;
```

- 삼항연산자를 통해서 기본값을 정했다.
- flex를 통해서 위치를 정했다.

##### 2-4 문구&버튼 부분 App.js

```
<Color>//Color 컴포넌트를 통해 문구와 버튼을 감싸고 미디어카드 백그라운드 컬러를 #F8F9FA로 변경시켰다.//
        <CenterWrapper
          flex_direction="column"
          height="216px"
          padding_top="96px"
          padding_bottom="96px"
        >
          <TextBox
            fontSize="2.5rem"
            text_align="center"
            fontWeight="300"
            margin_bottom="3px"
          >
            Album example
          </TextBox>
          <TextBox color="#6c757d" fontSize="20px" fontWeight="300">
            Something short and leading about the collection below—its contents,
          </TextBox>
          <TextBox color="#6c757d" fontSize="20px" fontWeight="300">
            the creator, etc. Make it short and sweet, but not too short so
            folks
          </TextBox>
          <TextBox
            color="#6c757d"
            fontSize="20px"
            fontWeight="300"
            margin_bottom="16px"
          >
            don’t simply skip over it entirely.
          </TextBox>
          <CenterWrapper
            flex_direction="row"
            height="50px"
            width="315px"
            justify_content="space-between"
          >
            <Button color="white" backgroundColor="#027BFF">
              Main call to action
            </Button>
            <Button color="white" backgroundColor="#6C757D">
              Secondary action
            </Button>
          </CenterWrapper>
        </CenterWrapper>
      </Color>//Color 컴포넌트 닫음//
```

### 3. 사진 앨범

##### MediaCard 컴포넌트

```
const CardWrapper = styled.div`
  height: 354px;
  width: 350px;
  margin-right: ${(props) => (props.margin_right ? props.margin_right : "0px")};
  margin-left: ${(props) => (props.margin_left ? props.margin_left : "0px")};
  margin-top: 48px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
//사진과 문구를 감싸주는 박스역할//

const StyledImg = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 2px;
`;
//이미지 스타일//

const Text = styled.div`
  padding: 20px;
`;
//긴문구와 '9min'문구를 감싸는 역할//

const Min = styled.div`
  display: flex;
  justify-content: flex-end;
`;
//'9min' 문구 위치 조정//

const MediaCard = (props) => {
  return (
    <CardWrapper
      margin_right={props.margin_right2}
      margin_left={props.margin_left2}
    >
      <StyledImg src={props.img} width={props.width} height={props.height} />
      <Text>
        <TextBox
          color={props.tcolor}
          fontWeight={props.fontWeight}
          fontSize={props.fontSize}
          text_align={props.text_align}
        >
          {props.content}
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </TextBox>
        <Min>
          <TextBox
            color={props.tcolor2}
            fontWeight={props.fontWeight2}
            fontSize={props.fontSize2}
            margin_right={props.margin_right2}
            text_align={props.text_align2}
          >
            {props.content}9 mins
          </TextBox>
        </Min>
      </Text>
    </CardWrapper>
  );
};

export default MediaCard;
```

### 3. 사진 앨범 App.js

```
    <Color background_color="#F8F9FA">
        <Image>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSgkIIEoCwenJ6-QMbs7-S-LBa_kvodKjMg&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_left2="95px"
            margin_right2="35px"
            text_align="left"
            text_align2="right"
          ></MediaCard>
```
