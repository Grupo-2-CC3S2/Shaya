const axios = require('axios').default;


export const signIn = (credentials) => {
  return  (dispatch, getState) => {
    axios({
        method: "post",
        url: "http://localhost:4001/api/auth/signin",
        data: credentials,
        headers: { "Content-Type": "application/json", 'Authorization': 'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //headers: { "Content-Type": "multipart/form-data", 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWI4NjExZmYzMTQ1NzVjNzZkOTg2NSIsImlhdCI6MTYyNjE0ODkzNywiZXhwIjoxNjI2MjM1MzM3fQ.YvHD8LJlcmADp-MWuGfTIcaAk8ak73G6qZgX-6Fpa30'},
        //x-access-token
        //headers: { "Content-Type": "application/json"},
      })
        .then((response) => {
          //handle success
          console.log(response);
          if (response.data) {
            console.log("token: ", response.data.token)
            dispatch({ type: 'LOGIN_SUCCESS' });
            window.localStorage.setItem("token", response.data.token);

			      window.location.href = `/mainHome/Perfil`
            //this.obtenerDatosDelUsuario()
          }
        })
        .catch((e) => {
          //handle error
          dispatch({ type: 'LOGIN_ERROR', e });
          if (e.response) {
            console.log("response: ", e.response.data.message);
          }
      });

  }


}



export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS'})
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('user').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        birthey: newUser.birthey,
        nativeLanguage: newUser.nativeLanguage,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}




