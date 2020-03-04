import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATA_BASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database();

export {firebase,dataBase as default};

// for(let i = 0 ;i < expenses.length;i++){
//     dataBase.ref('expenses').push(expenses[i]).then(() => {
//         console.log('success')
//     }).catch((e) => {
//         console.error(e)
//     });
// }

// dataBase.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapShot)=>{
//         expenses.push({
//             id:childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })
//    console.log(expenses);
// })


// dataBase.ref('expenses').on('child_changed',(snapshot)=>{
//    console.log(snapshot.key,snapshot.val());
// })
// dataBase.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
//  })






// const onValueChange = dataBase.ref().on('value',(snapshot)=>{
//     const {name,job:{title,company}} = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}`);
// })

// dataBase.ref().set({
//     name: "tomer",
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title:'softWare developer',
//         company:'Google'

//     },
//     locations: {
//         city: "tirat carmel",
//         contry: "israel"
//     }
// }).then(() => { console.log('succsed') }).catch((e) => { console.log(e) })

// dataBase.ref().update({
//     stressLevel:9,
//     "job/company":'amazon',
//     'locations/city':'Seattle'
// })





