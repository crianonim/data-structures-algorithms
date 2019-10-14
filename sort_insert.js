const sort=(a)=>{
    const l=a.length;
    let arr=[a[0]];
    for (let i=1;i<l;i++){
        let el=a[i];
        let al=arr.length
        for (let j=0;j<al;j++){
            if (el<arr[j]){
                arr=arr.slice(0,j).concat(el).concat(arr.slice(j))
                break
            } else if (j===al-1){
                arr.push(el);
            }
        }
    }
    return arr;
}
const sort_in_place=(a)=>{
    for (let j=1;j<a.length;j++){ // start with after 0
        let value=a[j]; // take value of next to sort
        let i=j-1;  // start from the last sorted
        while (i>=0 && a[i]>value){ // as long as it's bigger 
            a[i+1]=a[i];           // move to right 
            i=i-1;                  // decrease to left
        }
        a[i+1]=value
    }
    return a;
}

let a1=[]
for (let i=0;i<10000;i++){
    a1.push(Math.random()*10);
}
console.time("s1");
sort_in_place(a1.slice());
console.timeEnd("s1");

console.time("s2");
sort(a1.slice());
console.timeEnd("s2");

// console.log(sort_in_place([3,4,5,1,7,9,5,-1,2,1]))
// console.log(sort_in_place(a1))
