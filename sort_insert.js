const sort=(a)=>{
    const l=a.length;
    let arr=[a[0]];
    let found=false;
    for (let i=1;i<l;i++){
        let el=a[i];
        for (let j=0;j<arr.length;j++){
            if (el<arr[j]){
                arr=arr.slice(0,j).concat(el).concat(arr.slice(j))
                found=true;
                break
            } else {
                found=false
            }
        }
        if (!found){
            found=false;
            arr.push(el);
        }
    }
    return arr;
}
let a1=[]
for (let i=0;i<1000;i++){
    a1.push(Math.random()*10);
}



console.log(sort([3,4,5,1,7,9,5,2]))
console.log(sort(a1))
