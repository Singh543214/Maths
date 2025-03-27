function check_prime(num){
    if(num<2){
        return 0;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return 0;
        }
    }
    return 1;
}
function multiplication() {
    let num = parseInt(document.getElementById("mult").value);
    let dis = document.getElementById("display");

    if (isNaN(num)) {
        dis.innerHTML = "<strong>Please enter a valid number!</strong>";
        return;
    }

    let res = `<strong>Multiplication Table of ${num}</strong> <br><br>`;
    for (let i = 1; i <= 10; i++) {
        res += `${num} x ${i} = ${num * i}<br>`;
    }
    if(num%2===0){
        res+=`<br>${num} is Even Number.<br>`;
    }
    else{
        res+=`<br>${num} is Odd Number.<br>`;
    }
    if(check_prime(num)){
        res+=`<br>${num} is Prime Number.<br>`;
    }
    else{
        res+=`<br>${num} is not Prime Number.<br>`;
    }


    dis.innerHTML = res;
}