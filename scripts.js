let myTextBox = document.getElementById("my-text-box");
let result = document.getElementById("result");


let isEmpty = () => {
  if (myTextBox.value.length != 0) {
    return false;
  } else {
    return true;
  }
};


let reverseStr = () => {
  if (isEmpty()) {
    result.innerHTML = "Please Enter Some Text";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `The reversed text is: <span>${myText
      .split("")
      .reverse()
      .join("")}</span>`;
  }
};


let isPalindrome = () => {
  if (isEmpty()) {
    result.innerHTML = "Please Enter Some Text";
  } else {
    let myText = myTextBox.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (myText == myText.split("").reverse().join("")) {
      result.innerHTML = `It is <span>A Palindrome</span>`;
    } else {
      result.innerHTML = `It is <span>Not A Palindrome</span>`;
    }
  }
};


let charCount = () => {
  if (isEmpty()) {
    result.innerHTML = "Please Enter Some Text";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `The character count is : <span>${myText.length}</span>`;
  }
};

let wordCount = () => {
  if (isEmpty()) {
    result.innerHTML = "Please Enter Some Text";
  } else {
    let myText = myTextBox.value;
    result.innerHTML = `The word count is: <span>${
      myText
        .trim()
        .split(/\s+/)
        .filter((item) => item).length
    }</span>`;
  }
};

let search = () => {
  let searchText = document.getElementById("search-text").value;
  if (isEmpty() || searchText.length == 0) {
    result.innerHTML = "Either Or Both Input Fields Are Empty";
  } else {
    let myText = myTextBox.value;
    if (myText.includes(searchText)) {
      result.innerHTML = `The text contains <span>'${searchText}'</span>`;
    } else {
      result.innerHTML = `The text does NOT contains <span>'${searchText}'</span>`;
    }
  }
};