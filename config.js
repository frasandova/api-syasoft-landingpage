//============================================
// Puerto
//============================================
process.env.PORT = process.env.PORT || 3000;

//============================================
// Entorno
//============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============================================
// Api SendGrid
//============================================
// process.env.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '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';

process.env.SENDGRID_API_KEY = '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';
process.env.FROM_EMAIL = 'contacto.syasoft@gmail.com';
process.env.TO_EMAIL = 'contacto.syasoft@gmail.com';

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

