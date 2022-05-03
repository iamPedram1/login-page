// Select Button and add Click Event
const btn = document.querySelector(".btn").addEventListener(
  "click",
  (submit = (e) => {
    // remove spaces from start and end of the input
    const inputEmail = document.querySelector(".input__email").value.trim(),
      inputPassword = document.querySelector(".input__password").value.trim();

    // Checking if input has been entered correctly
    if (inputEmail.length < 1 || inputPassword.length < 6) return;

    // Fetch User informations from Api
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const dataList = data.users;

        // Finding User in the API
        const found = dataList.find((item) => {
          return item.email == inputEmail && item.password == inputPassword;
        });
        if (found !== undefined) {
          alert("Logged in succesfully");
        } else {
          alert("Email/Password is incorrect");
        }
      });
  })
);
