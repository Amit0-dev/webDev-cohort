// if("" == false){
//     console.log("Yeah its working")
// }else{
//     console.log("oops something went wrong")
// }


// if([] === []) -> This condition will always return 'false' since JavaScript compares objects by reference, not value.



// 1. write program for leap year

function checkLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log(`${year} is leap year`)
        return
    }
    console.log(`${year} is not leap year`)
}


checkLeapYear(2025)
checkLeapYear(2000)