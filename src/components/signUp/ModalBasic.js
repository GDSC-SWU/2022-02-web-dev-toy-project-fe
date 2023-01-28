import styles from "./ModalBasic.module.css";

function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div className={styles.content_wrapper}>
          <h3 className={styles.title}>로그인에 어려움이 있나요?</h3>
          <p className={styles.question}>
            분명 이 소셜 서비스로 로그인 했었는데 지금은 안 돼요.
          </p>
          <span className={styles.answer}>
            - 혹시 로그인헀던 소셜서비스의 계정을 아예 삭제했거나, 비밀번호를
            변경했나요? 이경우, 해당 소셜 서비스에서 직접 확인한 후 텍스처에
            로그인이 가능합니다.
          </span>
          <p className={styles.question}>
            구글 계정으로 로그인 하려는데 절차가 복잡해요.
          </p>
          <span className={styles.answer}>
            - 혹시 Google Workspace 계정으로 로그인을 시도하셨나요? 이 경우,
            Google Device Policy 맴 다운로드 및 해당 앱 로그인 후 모두리 이용이
            가능합니다.
          </span>
          <p className={styles.question}>
            그래도 문제가 해결되지 않는다면 고객센터로 이메일을 보내주세요.
            편리한 이용을 위한 모두리가 되겠습니다.
          </p>
          <button className={styles.email}>이메일 보내기</button>
        </div>
      </div>
      {/* TODO: onClick={ } 메서드 구현 */}
    </div>
  );
}
export default ModalBasic;
