console.log("Töötab")

nimi = "Kalle"
console.log(nimi)
    if (nimi.length > 1) {
        console.log("Nimi on korrektne")
    } else {
        console.log("Nimi on liiga lühike")
}

nimi = "K"
console.log(nimi)
    if (nimi.length > 1) {
        console.log("Nimi on korrektne")
    } else {
        console.log("Nimi on liiga lühike")
}
    
vanus = 25
console.log(vanus)
    if (vanus >= 18) {
        console.log("Isik on täisealine")
    } else {
        console.log("Isik on alaealine")
}

vanus = 17
console.log(vanus)
    if (vanus >= 18) {
        console.log("Isik on täisealine")
    } else {
        console.log("Isik on alaealine")
}

email = "kalle25@gmail.com"
console.log(email)
    if (email.includes("@")) {
        console.log("Email on korrektne")
    } else {
        console.log("Email ei ole korrektne")
}

email = "kalle25.gmail.com"
console.log(email)
    if (email.includes("@")) {
        console.log("Email on korrektne")
    } else {
        console.log("Email ei ole korrektne")
}

registreerunud = true
    if (registreerunud) {
        console.log("Registreerunud")
    } else {
        console.log("Mitte registreerunud")
}

const str1 = 'E-mail saadetud';
const str2 = 'sellele aadressile';

console.log(str1.concat(' ', str2));
    console.log(email)
    console.log(str1.concat(' ', email));
const str3 = 'E-maili ei';
const str4 = 'saadetud';    

isikukood = "00000000001"
console.log(isikukood)
    if (isikukood.length >= 11) {
        console.log("Isikukood on korrektne")
    } else {
        console.log("Eisikukood ei ole korrektne")
}

isikukood = "0000000000"
console.log(isikukood)
    if (isikukood.length >= 11) {
        console.log("Isikukood on korrektne")
    } else {
        console.log("Eisikukood ei ole korrektne")
}
