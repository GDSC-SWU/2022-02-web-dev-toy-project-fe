import React from "react";
import styled from "styled-components";
import NavigationBar from "../UI/NavigationBar";
import API from "../../api/API";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import arrowIcon from "../../assets/images/ic_round-keyboard-arrow-down.svg";
import "./CreatePost.css";

// 사진 추가 - 파일 리더 사용
function CreatePost() {
  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.accessToken);
  const [loc, setLoc] = useState(null); // 위치
  const [detailLoc, setDetailLoc] = useState(null); // 세부 위치
  const [title, setTitle] = useState(null); // 게시글 제목
  const [type, setType] = useState("분실물"); // 게시글 유형(postStatus)
  const [tag, setTag] = useState(""); // 카테고리
  const [isSelected, setIsSelected] = useState(false);
  const typeData = ["분실물", "습득물"];
  const [content, setContent] = useState(null); // 게시글 내용
  // const [apiResult, setApiResult] = useState([])
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (location.state) {
      const newLocation = location.state.lostLocation;
      const detailLocation = location.state.detailLostLocation;
      setLoc(newLocation);
      setDetailLoc(detailLocation);
    }
  }, [loc, detailLoc]);

  const imgRef = useRef();

  const categoryArray = [
    "전자제품",
    "귀중품",
    "문구류",
    "의류",
    "서적",
    "화장품",
    "기타",
  ];

  //API 연결
  const sendPost = async () => {
    const file = imgRef.current.files[0];
    const json = {
      title: title,
      content: content,
      place: loc,
      placeDetail: detailLoc,
      postStatus: type,
      status: "안찾음", // 상태 (주인 찾았는지 여부) -> 처음 게시물 작성할 때는 항상 "안찾음"
      tag: tag.tag,
    };
    console.log(json);

    try {
      const formData = new FormData();
      formData.append("json", JSON.stringify(json));
      formData.append("file", file);

      const post = await API.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // detailPage 이동
      navigate(`/detail/${post.data.postId}`);
    } catch (error) {
      // 예외 처리
      console.log(error);
    }
  };

  const onClickNext = () => {
    sendPost();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClickFileButton = () => {
    imgRef.current.click();
  };

  // const onChangeImage = () => {
  //   const reader = new FileReader()
  //   const file = imgRef.current.files[0]
  //   console.log(file)

  //   reader.readAsDataURL(file)
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result)
  //     console.log('이미지주소', reader.result)
  //   }
  // }

  const handleToggleButton = (e) => {
    setIsSelected((prev) => !prev);

    //postStatus 설정
    const newType = typeData[e.target.value];
    console.log(e.target.value);
    setType(newType);
  };

  const handleTag = (e) => {
    setTag((prev) => ({ ...prev, tag: e.target.value }));
  };

  const handleType = (e) => {
    type((prev) => ({ ...prev, type: e.target.value }));
  };

  //   const onNextClick = () => {
  //     sendPost()
  //   }
  // }

  // useEffect(() => {
  //   if (location.state) {
  //     setLoc(location.state.loc)
  //     setDetailLoc(location.state.detail)
  //   }
  // }, [])

  return (
    <>
      <Link to="/newpost">
        <NavigationBar />
      </Link>
      <ArticleFormWrapper>
        <Title>게시글을 작성해 주세요</Title>
        <SwuBuilding>{loc}</SwuBuilding>
        <DetailBuilding>{detailLoc}</DetailBuilding>
        <DevideLine></DevideLine>
        <SubTitle>
          제목<span>*</span>
        </SubTitle>
        <CustomInput
          placeholder="게시글 제목을 입력해주세요"
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <SubTitle>
          게시글 유형<span>*</span>
        </SubTitle>
        <ToggleButtonWrapper>
          {typeData.map((item, idx) => {
            return (
              <div key={idx}>
                <ToggleButton
                  value={idx}
                  className={
                    "toggleButton" + (idx == isSelected ? " active" : "")
                  }
                  onClick={(e) => handleToggleButton(e)}
                >
                  {item}
                </ToggleButton>
              </div>
            );
          })}
        </ToggleButtonWrapper>
        <SubTitle>
          카테고리<span>*</span>
        </SubTitle>
        <CategoryOption
          require="true"
          onChange={handleTag}
          defaultValue={"DEFAULT"}
          className="locateSelect"
        >
          <option disabled value="DEFAULT" hidden>
            카테고리 선택하기
          </option>
          {categoryArray.map((item, index) => (
            <option key={index} className="preventSelect" value={item}>
              {item}
            </option>
          ))}
        </CategoryOption>
        <SubTitle>
          사진을 첨부해 주세요<span>*</span>
        </SubTitle>
        <form
          encType="multipart/form-data"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <ImageUpload
            name="file"
            type="file"
            accept="image/*"
            // onChange={onChangeImage}
            ref={imgRef}
          />
          <ImageUploadButton type="submit" onClick={onClickFileButton}>
            +
          </ImageUploadButton>
        </form>
        <SubTitle>
          게시글 내용<span>*</span>
        </SubTitle>
        <TextBoxArea>
          <TextBox
            placeholder="게시글 제목을 입력해주세요"
            onChange={(e) => {
              const value = e.target.value;
              setContent(value);
            }}
          ></TextBox>
        </TextBoxArea>
        <NextButton onClick={() => onClickNext()} className="nextButton">
          다음
        </NextButton>
      </ArticleFormWrapper>
    </>
  );
}

const ArticleFormWrapper = styled.div`
  display: flex;
  padding: 0 1.25rem 1.25rem 1.25rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: auto;
  height: 62rem;
  width: 100vw;
  box-sizing: border-box;

  h2,
  p,
  div {
    align-self: flex-start;
  }
`;

const CustomInput = styled.input`
  width: 100%;
  height: 3.2rem;
  /* margin-bottom: 2.5rem; */
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(16, 79, 250, 0.05);
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.75rem;
  align-items: flex-start;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  span {
    color: #eb3737;
    position: relative;
    left: 2px;
    top: 4px;
  }
`;

const ToggleButton = styled.button`
  width: 4.75rem;
  height: 2rem;
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 1rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 400;
  font-size: 0.875rem;
  color: #818181;
`;

const ToggleButtonWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const TextBoxArea = styled.div`
  width: 100%;
  height: 7.5rem;
`;

const TextBox = styled.textarea`
  width: 100%;
  height: 100%;
  margin-bottom: 2.5rem;
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(16, 79, 250, 0.05);
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
`;

const NextButton = styled.button`
  /* position: absolute;
  bottom: 2rem; */
  width: 100%;
  height: 3.5rem;
  background-color: #eaeaea;
  border-radius: 40px;
  line-height: 3.5rem;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
`;

const CategoryOption = styled.select`
  width: 100%;
  height: 3.2rem;
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
  //
  user-select: none; /* Standard syntax */
  -webkit-user-select: none;
  color: #000;
  -webkit-appearance: none;
  appearance: none;
  //
  background-image: url(${arrowIcon});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
`;

const SwuBuilding = styled.h2`
  font-size: 1rem;
  margin-top: 2.5rem;
  font-weight: normal;
`;

const DetailBuilding = styled.div`
  font-weight: normal;
  font-size: 0.8rem;
  color: #bbbbbb;
  text-align: left;
  margin-top: 0.5rem;
`;

const DevideLine = styled.div`
  background-color: #f8f8f8;
  height: 6px;
  box-sizing: content-box;
  border: 1px solid #ededed;
  // 부모 padding 무시
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: 1.5rem;
  //
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageUploadButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  font-size: 32px;
  font-weight: 100;
  text-align: center;
  border-radius: 8px;
`;

const StyeldLink = styled(Link)`
  width: 100%;
  height: 3.5rem;
`;

export default CreatePost;
