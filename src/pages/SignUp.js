import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';

const SignUp = ({submitForm}) => {

  const{ handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return ( 
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit} noValidate>
            <h1>회원가입</h1>
            <div className="form-inputs">
              <label htmlFor="userName" className="form-label">이름</label>
              <input id="username" type="text" name = "username" className="form-input" placeholder="이름을 입력하세요" 
              value={values.username} onChange={handleChange} />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">이메일</label>
              <input id="email" type="email" name = "email" className="form-input" placeholder="이메일을 입력하세요" 
              value={values.email} onChange={handleChange}/>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">비밀번호</label>
              <input id="password" type="password" name = "password" className="form-input" placeholder="비밀번호를 입력하세요" 
              value={values.password} onChange={handleChange}/>
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="password2" className="form-label">비밀번호 확인</label>
              <input id="password2" type="password" name = "password2" className="form-input" placeholder="이메일을 입력하세요" 
              value={values.password2} onChange={handleChange}/>
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">회원가입</button>
        </form>
    </div> 
  )
}

export default SignUp