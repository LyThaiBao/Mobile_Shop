
export function formatVietnameseMoney(number){
    const arr = [];
    const s = number.toString();
    let count = 0;
    for(let i = s.length-1; i>=0; i--){
        count++;
        arr.push(s[i]);
        if(count == 3 && i != 0 && s[i-1] != "-"){
            arr.push(".");
            count = 0;
        }
    }
   const result = arr.reverse().join("");

   return `${result}đ`;
}   


export function convertToNumber(VietnameseMoney){
    const s = VietnameseMoney.slice(0,a.length-1).split("");
    for(let i = 0; i<s.length; i++){
        for(let j = i; j<s.length; j++){
            if(s[i] == "."){
                s[j] = s[j+1];
            }
        }
    }
    return Number(s.join(""));
}

// const a = formatVietnameseMoney(120000);
// const b = convertToNumber(a);
// console.log(a);
// console.log(b);

