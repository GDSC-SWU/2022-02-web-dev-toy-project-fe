export default function validateInfo(values) {
    let errors = {}

    //* 닉네임 유효성 검사
    // TODO: 유효성 검사 세부 수정
    // TODO: 닉네임 중복확인 구현
    if(!values.userNickname) {
        errors.userNickname = "닉네임을 입력해주세요";
    } else if (values.userNickname.length < 3) {
        errors.userNickname = "닉네임을 3자 이상 입력해주세요"
    }

    return errors;
}