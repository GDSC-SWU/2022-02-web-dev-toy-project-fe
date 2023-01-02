import React from 'react'
import useForm from './UseForm'
import validate from './ValidateInfo';

const SignUp = ({submitForm}) => {

  const{ handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return ( 
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit} noValidate>
            <h1>회원가입</h1>
              <div className="form-inputs">
              <label htmlFor="userid" className="form-label">아이디</label>
              <input id="userid" type="text" name = "userid" className="form-input" placeholder="이름을 입력하세요" 
              value={values.userid} onChange={handleChange} />
              {errors.userid && <p>{errors.userid}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="nickname" className="form-label">닉네임</label>
              <input id="nickname" type="text" name = "nickname" className="form-input" placeholder="이메일을 입력하세요" 
              value={values.nickname} onChange={handleChange}/>
              {errors.nickname && <p>{errors.nickname}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">이름</label>
              <input id="name" type="text" name = "name" className="form-input" placeholder="이름을 입력하세요" 
              value={values.name} onChange={handleChange} />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="studentid" className="form-label">학번</label>
              <input id="studentid" type="text" name = "studentid" className="form-input" placeholder="비밀번호를 입력하세요" 
              value={values.studentid} onChange={handleChange}/>
              {errors.studentid && <p>{errors.studentid}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="department" className="form-label">학과</label>
              <input id="department" type="text" name = "department" className="form-input" placeholder="이메일을 입력하세요" 
              value={values.department} onChange={handleChange}/>
              {errors.department && <p>{errors.department}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="status" className="form-label">상태</label>
              <input id="status" type="text" name = "status" className="form-input" placeholder="이메일을 입력하세요" 
              value={values.status} onChange={handleChange}/>
              {errors.status && <p>{errors.status}</p>}
            </div>
            <button className="form-input-btn" type="submit">회원가입</button>
        </form>
    </div> 
  )
}

export default SignUp
