// import React, { useState, useEffect } from "react";
// import firebase from "firebase";

// export function useCurrentUser() {

//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         return setCurrentUser(user.uid);
//       } else {
//         return setCurrentUser(null);
//       }
//     });
//   }, [] );
//   return currentUser;
// }
