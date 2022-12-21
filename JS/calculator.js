let value = null;

let inputEle = document.getElementById("inputClass");

let ans = document.getElementById("ans");

function handleClick(char) {
  if (char === null) {
    value = null;
    inputEle.value = null;
    return;
  }

  if (value === null) {
    value = char;
  } else {
    value += char;
  }
  inputEle.value = value;
  console.log(value);
}

function handleSubmit() {
  value = eval(value);

  inputEle.value = value;

  ans.innerText = value;
  console.log(value);
}
