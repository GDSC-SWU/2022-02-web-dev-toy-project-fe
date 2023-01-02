export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "이름을 입력해주세요";
    }

    if(!values.email) {
        errors.email = "이메일을 입력해주세요";
    } else if(!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(values.email)) {
        errors.email = "이메일 주소가 올바르지 않습니다";
    }

    if(!values.password) {
        errors.password = "비밀번호를 입력해주세요";
    } else if(values.password.length < 6) {
        errors.password = "비밀번호를 6자 이상 입력해주세요";
    }

    if(!values.password2) {
        errors.password2 = "비밀번호를 입력해주세요";
    } else if(values.password2 !== values.password) {
        errors.password2 = "비밀번호가 일치하지 않습니다.";
    }

    return errors;
}