const logger = (params) => console.log(params);
logger("promise.all settled");
let promise1 = new promiseFunc((res, rej) => {
  setTimeout(() => {
    res("resolved promise 1");
  }, 2000);
});

let promise2 = new promiseFunc((res, rej) => {
  setTimeout(() => {
    res("resolved promise 2");
  }, 4000);
});

let promise3 = new promiseFunc((res, rej) => {
  setTimeout(() => {
    res("resolved promise 3");
  }, 4000);
});

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function setLocalStorage() {
  localStorage.setItem("token");
}

setLocalStorage();

function getLocalStorage() {
  return localStorage.getItem("token");
}

function removeLocalStorage() {
  localStorage.removeItem("token");
}

console.log(getLocalStorage());

removeLocalStorage();

const userData = [
  {
    username: "suriya",
    password: "Pass@123",
    role: "general",
  },
  {
    username: "admin",
    password: "admin@123",
    role: "admin",
  },
];

function storeInitialUserData() {
  localStorage.setItem("userdata", JSON.stringify(userData));
}
storeInitialUserData();

function getAllUserDetails() {
  return localStorage.getItem("userdata");
}

let mainContainer = document.getElementById("container");

mainContainer.innerHTML = `
<div class="login-form">
<input placeholder="Enter Username" type="text" id="name-inp"
<input placeholder="Enter Username" type="password" id="pass-inp"
<button id="login-btn">Login</button>
<div id="mes"></div>
</div>
`;

document.getElementById("login-btn").addEventListener("click", () => {
  const allUserDate = JSON.parse(getAllUserDetails());
  let username = document.getElementById("name-inp").value;
  let password = document.getElementById("name-pass").value;
  if (username && password) {
    let user = allUserData.find((user) => user.username === username);
    if (!user) {
      document.getElementById("mes").innerText = "No user exist";
      document.getElementById("mes").style.color = "crimson";
      return;
    }
    if (user.password !== password) {
      document.getElementById("mes").innerText = "invalid user credentials";
      document.getElementById("mes").style.color = "crimson";
      return;
    }
    console.log({ username, password });
    console.log(JSON.parse(getAllUserDetails()));
  }
});

document.body.appendChild(mainContainer);

// login Form
// 2 input username and password
// <div> Welcome username</div>
// local -> role: 'user-role'

// class vehicle {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   getVehicleName() {
//     console.log(`Vokswagon ${this.name}`);
//   }
// }

// class vehiclePower extends vehicle {
//   constructor(engine) {
//     super(name, type);
//     this.engine = engine;
//   }
// }
// // encapsulation, polymorphism, abstarction, inheritance
// const virtus = new vehicle("virtus", "sedan");
// const tigun = new vehicle("tigun", "SUV");
// const tigun = new vehicle("tiguan", "SUV");
// const passat = new vehiclePower("passat", "sedan", "4 cylinder");

// console.log(virtus);
// virtus.getVehicleName();
// console.log(passat);
