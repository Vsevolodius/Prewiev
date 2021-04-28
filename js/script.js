" use strict ";

if ( 4 == 9 ) {
    console.log ('OK!');
} else {
    console.log ('Error!');
}

const num = 50;

if (num < 49) {
    console.log ('error');
} else if (num > 100) {
    console.log ('mnogo');
} else {
    console.log ('OK!');
}

(num == 51) ? console.log('OK!') : console.log('error2');


const num = 51
 
switch (num) {
    case 49:
        console.log ("newerno")
        break;
    case 100:
        console.log ("newerno")
        break;
    case 50:
        console.log('prawilno');
        break;
    default:
        console.log('New etot raz');
        break;        
}
   