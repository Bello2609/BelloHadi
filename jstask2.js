//this is my second javascript task 
let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];
function interestCalculator(){
    const interestData = data.map(pp=>{
        let rate;
        if(pp.principal >= 2500 && pp.time < 3){
            rate = 3;
        }
        else if(pp.principal >= 2500 &&  pp.time >= 3){
            rate = 4;
        }
        else if(pp.principal < 2500 ||  pp.time <= 1){
            rate = 2;
        }
        else{
            rate = 1;
        }
        let interest = (pp.principal*pp.time * rate)/100;
       
       let interestArray = {principal: pp.principal, rate, time: pp.time, interest};
       console.log(interestArray);
    });
    return interestCalculator;
}
 
interestCalculator();





