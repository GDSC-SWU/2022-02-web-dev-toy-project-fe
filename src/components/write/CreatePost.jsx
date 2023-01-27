import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../UI/NavigationBar'

function CreatePost() {
  return (
    <div>
      <NavigationBar />
      <ArticleFormWrapper>
        <Title>게시글을 작성해 주세요</Title>
        <SubTitle>
          제목<span>*</span>
        </SubTitle>
        <CustomInput />
        <SubTitle>
          게시글 유형<span>*</span>
        </SubTitle>
        <ToggleButtonWrapper>
          <ToggleButton>분실</ToggleButton>
          <ToggleButton>습득</ToggleButton>
        </ToggleButtonWrapper>
        <SubTitle>
          카테고리<span>*</span>
        </SubTitle>
        <CategoryOption>
          <option value="volvo">전자제품</option>
          <option value="saab">귀중품</option>
          <option value="opel">문구류</option>
          <option value="audi">의류</option>
          <option value="audi">서적</option>
          <option value="audi">화장품</option>
          <option value="audi">기타</option>
        </CategoryOption>
        <SubTitle>
          게시글 내용<span>*</span>
        </SubTitle>
        <TextBox />
        <NextButton>다음</NextButton>
      </ArticleFormWrapper>
    </div>
  )
}

const ArticleFormWrapper = styled.div`
  display: flex;
  padding: 0 1.25rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  height: 45rem;
  width: 100vw;

  h2,
  p,
  div {
    align-self: flex-start;
  }
`

const CustomInput = styled.input`
  width: 100%;
  height: 3.2rem;
  /* margin-bottom: 2.5rem; */
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(16, 79, 250, 0.05);
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.75rem;
  align-items: flex-start;
  margin-top: 1.625rem;
`

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
`

const ToggleButton = styled.div`
  width: 3.875rem;
  height: 2rem;
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 1rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 400;
  font-size: 0.875rem;
  color: #818181;
`

const ToggleButtonWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

const TextBox = styled.textarea`
  width: 100%;
  height: 7.5rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(16, 79, 250, 0.05);
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
`

const NextButton = styled.button`
  width: 100%;
  height: 3.5rem;
  background-color: #eaeaea;
`

const CategoryOption = styled.select`
  width: 100%;
  height: 3.2rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(16, 79, 250, 0.05);
  border: 1px solid rgba(189, 189, 189, 0.4);
  border-radius: 5px;
`

export default CreatePost
