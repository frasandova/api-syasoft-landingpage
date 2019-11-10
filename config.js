//============================================
// Puerto
//============================================
process.env.PORT = process.env.PORT || 3000;

//============================================
// Entorno
//============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//============================================
// Entorno
//============================================

let urlDB;
urlDB = 'mongodb+srv://syasoftadmin:jfcs4RWm5Bm3Bc4J@cluster0-0ak3v.mongodb.net/hospitalDB';
// if( process.env.NODE_ENV === 'dev'){
//     urlDB = 'mongodb://localhost:27017/hospitalDB';
// }else{
//     urlDB = 'mongodb+srv://syasoftadmin:jfcs4RWm5Bm3Bc4J@cluster0-0ak3v.mongodb.net/hospitalDB';
// }

process.env.URLDB = urlDB;

