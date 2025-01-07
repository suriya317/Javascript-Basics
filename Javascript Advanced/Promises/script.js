function startingOperation() {
  return new Promise((res, rej) => {
    res("starting");
  });
}
function firstOperation() {
  return new Promise((res, rej) => {
    res("first Operation");
  });
}
function secondOperation() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("second Operation");
    }, 2000);
  });
}
function thirdOperation() {
  return new Promise((res, rej) => {
    res("third Operation");
  });
}
function fourthOperation() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("fourth Operation");
    }, 4000);
  });
}
function fifthOperation() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("fifth Operation");
    }, 1000);
  });
}
function competeOperation() {
  console.log("competed");
}

function invokeOperation() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Invoke Operation");
    }, 2000);
  });
}

function promiseFunc() {
  startingOperation()
    .then((data) => {
      console.log(data);
      return firstOperation();
    })
    .then((data) => {
      console.log(data);
      return secondOperation();
    })
    .then((data) => {
      console.log(data);
      return invokeOperation();
    })
    .then((data) => {
      console.log(data);
      return thirdOperation();
    })
    .then((data) => {
      console.log(data);
      return fourthOperation();
    })
    .then((data) => {
      console.log(data);
      return fifthOperation();
    })
    .then((data) => {
      console.log(data);
      return competeOperation();
    });
}

//promise function -> async

async function asyncFunc() {
  let optstart = await startingOperation();
  let fOperation = await firstOperation();
  await secondOperation();
  await thirdOperation();
  let furOperation = await fourthOperation();
  let fifOperation = await fifthOperation();
  console.log(optStart);
  console.log(fOperation);

  console.log(furOperation);
  console.log(fifOperation);
  competeOperation();
}

//asyncFunc()

let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved promise 1");
  }, 2000);
});

let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("rejceted promise 2");
  }, 3000);
});

let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolved promise 3");
  }, 4000);
});

// Promise.all([promise1, promise2, promise2])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -TASK

// write a promise function

// input marks
// marls = >80 or above -> res(Eligible for interview)
// lesser <80 rej(Not Eligible)
// 2000 -> calculating

//-promise producer

function studentsPromise(marks) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (marks >= 80) {
        res("Eligible of Placement");
      } else {
        rej("Not Eligible");
      }
    }, 2000);
  });
}

//-promise consumer

// isEligible(80)
//   .then((pass) => {
//     console.log(pass);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function checkIsEligible() {
  try {
    let result = await checkIsEligible(5);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkIsEligible();
