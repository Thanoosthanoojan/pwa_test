import firebase from "firebase";

export const initializeFirebase = () => {
    // const config = {
    //     apiKey: "AIzaSyC5ghkX8x22Mh5wzw-SUJXwlMW2P7YqcqA",
    //     authDomain: "pwatest-45bb6.firebaseapp.com",
    //     databaseURL: "https://pwatest-45bb6.firebaseio.com",
    //     projectId: "pwatest-45bb6",
    //     storageBucket: "pwatest-45bb6.appspot.com",
    //     messagingSenderId: "704492817614",
    //     appId: "1:704492817614:web:6d145870eeef3f2bf6d49f"
    // };
    // firebase.initializeApp(config);
    // console.log('firebase init');

    firebase.initializeApp({
        apiKey: "AIzaSyC5ghkX8x22Mh5wzw-SUJXwlMW2P7YqcqA",
        authDomain: "pwatest-45bb6.firebaseapp.com",
        databaseURL: "https://pwatest-45bb6.firebaseio.com",
        projectId: "pwatest-45bb6",
        storageBucket: "pwatest-45bb6.appspot.com",
        messagingSenderId: "704492817614",
        appId: "1:704492817614:web:6d145870eeef3f2bf6d49f"
    })
};

export const askForPermissionToReceiveNotifications = async () => {
    try{
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log("token :" ,token);
        localStorage.setItem("notification-token" ,token);

        return token;
    }
    catch(error){
        console.error(error);
    }
};