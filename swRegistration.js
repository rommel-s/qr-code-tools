// let newWorker;

// function showUpdateBar() {
//   let snackbar = document.getElementById("snackbar");
//   snackbar.className = "show";
// }

// // The click event on the pop up notification
// document.getElementById("reload").addEventListener("click", function () {
//   newWorker.postMessage({ action: "skipWaiting" });
// });

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./sw.js")
//     .then((registration) => {
//       registration.addEventListener("updatefound", () => {
//         newWorker = registration.installing;
//         newWorker.addEventListener("statechange", () => {
//           switch (newWorker.state) {
//             case "installed":
//               if (navigator.serviceWorker.controller) {
//                 showUpdateBar();
//               }
//               break;
//           }
//         });
//       });
//       console.log("Service worker registered!");
//       console.log(registration);
//     })
//     .catch((error) => {
//       console.log("Registration failed!");
//       console.log(error);
//     });
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Sucess! " + reg.scope))
      .catch((err) => console.log("Failure! Error " + err));
  });
}
