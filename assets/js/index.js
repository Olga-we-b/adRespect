const cardTogglers = document.querySelectorAll('#toggler-container form > label');
const periodTitles = document.querySelectorAll('.list-group p:nth-child(3)');
const prices = document.querySelectorAll('.list-group h3:first-of-type > span');
const rates = 12;
const discount = .65;
let counter = 0;


// SOLUTION 1

// for (el of cardTogglers){


//     el.addEventListener('click', e =>  {
       
//         for (i of cardTogglers){
//             i.classList.remove("active-label")
//         }
//         e.target.classList.add("active-label")


//         if (e.target.innerText == "YEARLY"){

//             for(el of periodTitles){
//                 el.innerText = "rocznie";
//             }
//             prices[0].innerText = 2496;
//             prices[1].innerText = 3510;
//             prices[2].innerText = 5070;

//         } else{

//             for(el of periodTitles){
//                 el.innerText = "miesięcznie";
//             }
//             prices[0].innerText = 320;
//             prices[1].innerText = 450;
//             prices[2].innerText = 650;

//         }
//     })
// }



// SOLUTION 2


for (el of cardTogglers){


    el.addEventListener('click', e =>  {
       
        for (i of cardTogglers){
            i.classList.remove("active-label")
        }
        e.target.classList.add("active-label")


        if (e.target.innerText == "YEARLY" && counter < 1){
            counter++;
            for(el of periodTitles){
                el.innerText = "rocznie";
            }
            for (i of prices){
                // i.innerText = i.innerText * rates * discount;
                i.innerText = countYearRates(i.innerText)
            }


        } else if(e.target.innerText == "MONTHLY" && counter == 1){
            counter--;
            for (i of prices){
                i.innerText = countMonthRates(i.innerText)
            }
        }
    })
}

function countYearRates(a){
    let price = a * rates * discount;
    return price;
}
function countMonthRates(a){
    let price = a / rates / discount;
    return price;
}


