//חיבור למסד נתונים
const mongoose = require('mongoose')

//זיהוי משתני הסביבה
const dotenv = require('dotenv')
dotenv.config()



//חיבור למונגו לוקאלי - קומפס
// mongoose.connect(process.env.LOCAL_URI, {})

// //חיבור לענן
// mongoose.connect(process.env.URI, {})
//     .then(() => {
//         console.log(`connection to mongoDb succeed!`);
//     })
//     .catch(error => {
//         console.log({ error });
//     })

    const connectToDB = async () => {
        // await mongoose.connect(process.env.LOCAL_URI)
        await mongoose.connect(process.env.LOCAL_URI)
    }
    // משתנה מכיל את המסד
const database = mongoose.connection

// במקרה של כשלון
database.on('error', (error) => {
    console.log('error');
    console.log(error.message);
})

// במקרה של הצלחה
database.once('connected', () => {
    console.log('connection succeed!');
})

module.exports = connectToDB