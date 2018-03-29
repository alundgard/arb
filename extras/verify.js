// get verification code
function getVerify() {
    return String(Math.floor(1000 + Math.random() * 9000));
}
const VERIFY = getVerify();
const KEY = 1414;