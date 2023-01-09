import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import styles from './SignUpPage.module.css'

const SignUp = ({submitForm}) => {

  const{ handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return ( 
    <div className={styles.wrapper}>
        <form className="form" onSubmit={handleSubmit} noValidate>
            <div className={styles.form_inputs}>
              <label htmlFor="userNickname" className={styles.form_label}>닉네임을 입력해주세요</label>
              <p className={styles.input_subTitle}>닉네임</p>
              <input id="userNickname" type="text" name = "userNickname" className={styles.nickname_input} placeholder="ex) 슈파인더" 
              value={values.userNickname} onChange={handleChange} />
              {errors.userNickname && <p>{errors.userNickname}</p>}
            </div>
            <button className={styles.confirmBtn} type="submit">확인</button>
        </form>
    </div> 
  )
}

export default SignUp