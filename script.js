// const btn = document.querySelector(".btn").addEventListener("click", submit);
// function submit(e) {
//   const inputEmail = document.querySelector(".input__email").value.trim();
//   const inputPassword = document.querySelector(".input__password").value.trim();

//   if (inputEmail.length < 1 || inputPassword.length < 6) return;
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       const dataList = Array.from(data.users);
//       for (let item of dataList) {
//         const email = item.email;
//         const password = item.password;
//         if (inputEmail === email && inputPassword === password) {
//           // Create Element
//           const newDiv = document.createElement("div");
//           const text = document.createTextNode("Logged in Succesfully");
//           newDiv.appendChild(text);
//           newDiv.setAttribute("class", "sucess");
//           const container = document.querySelector(".container");
//           container.insertBefore(newDiv, null);
//           return;
//         }
//       }
//       // Create Element
//       const newDiv = document.createElement("div");
//       const text = document.createTextNode(
//         "Your Email or Password is Incorrect"
//       );
//       newDiv.appendChild(text);
//       newDiv.setAttribute("class", "fail");
//       const container = document.querySelector(".container");
//       container.insertBefore(newDiv, null);
//     });
// }

// // if (inputEmail.toLowerCase() == email && inputPassword == password) {
// // }

const submit = (e) => {
  const inputEmail = document.querySelector(".input__email").value.trim();
  const inputPassword = document.querySelector(".input__password").value.trim();
  if (inputEmail.length < 1 || inputPassword.length < 6) return;
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      const dataList = Array.from(data.users);
      const found = dataList.find((item) => {
        return item.email == inputEmail && item.password == inputPassword;
      });
      console.log(found);
      if (found !== undefined) {
        alert("Logged in succesfully");
      } else {
        alert("email/password is incorrect");
      }
    });
};

const btn = document.querySelector(".btn").addEventListener("click", submit);
