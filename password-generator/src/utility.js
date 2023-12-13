export function generateRandompassword(
  length,
  includeNumber,
  includeSpecialChar
) {
  let randomStr = "abcdefghijklmnopqrstuvxyz";
  if (includeNumber) {
    randomStr += "1234567890";
  }
  if (includeSpecialChar) {
    randomStr += "&*^%$#@!)";
  }

  let randomStrArr = randomStr.split("");
  let randomPassword = "";

  for (let i = 0; i < length; i++) {
    randomPassword +=
      randomStrArr[Math.floor(Math.random() * (randomStrArr.length - 1))];
  }
  return randomPassword;
}

export function copy(node) {
  node.select();
  document.execCommand("copy");
  node.focus();
}
