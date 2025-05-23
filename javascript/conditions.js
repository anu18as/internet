// var marks=prompt('enter the marks')
// console.log(marks)
// if (marks>=0 && marks<=35)
// alert(marks+ 'fail')
// else if (marks>=35 &&marks<=49)
// alert(marks+'c grade')
// else if (marks>=49 &&marks<=59)
// alert(marks+'c+ grade')
// else if (marks>=60 &&marks<=69)
// alert(marks+'B grade')
// else if (marks>=70 &&marks<=79)
// alert(marks+'B+ grade')
// else if (marks>=80 &&marks<=89)
// alert(marks+'A grade')
// else if (marks>=90 &&marks<=100)
// alert(marks+'A+ grade')
// else{
// alert('invalid')
// }

// let day=1
// switch (day) {

//     case 0:
//         console.log(sunday);
        
//         break;
//       case 1:
//             console.log(monday);
//             break
//     case 2:
//             console.log(tuesday);
//             break
//     case 3:
//             console.log(wednasday);
//             break
//      case 4:
//                 console.log(thursday);
//                 break
//      case 5:
//                     console.log(friday);

//     default:
//         console.log('invalid');
//         break;
// }


let marks=1
switch (day) {

    case (marks>=0 && marks<=35):
        console.log('fail');
        
        break;
      case  (marks>=36 &&marks<=49):
            console.log('c');
            break
    case (marks>=50 &&marks<=59):
            console.log('c+');
            break
    case (marks>=60 &&marks<=69) :
            console.log('b');
            break
     case (marks>=70 &&marks<=79):
                console.log(thursday);
                break
     case (marks>=80 &&marks<=89):
                console.log(friday);
                    break
    case (marks>=90 &&marks<=100):
            console.log(friday);
                        break
  
    default:
        console.log('invalid');
        break;
}
