import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import setUserInfo from "../store/setUserInfo";
import { useDispatch } from "react-redux";

const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className={styles.form_inputs}>
          <label htmlFor="userNickname" className={styles.form_label}>
            닉네임을 입력해주세요
          </label>
          <p className={styles.input_subTitle}>닉네임</p>
          <input
            id="userNickname"
            type="text"
            name="userNickname"
            className={styles.nickname_input}
            placeholder="ex) 슈파인더"
            value={values.userNickname}
            onChange={handleChange}
          />
          {errors.userNickname && <p>{errors.userNickname}</p>}
        </div>
        <Link to="/home">
          <button
            className={styles.confirmBtn}
            type="submit"
            // 테스트용
            onClick={setUserInfo(
              dispatch,
              values.userNickname,
              "token_sample_1234"
            )}
          >
            확인
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
