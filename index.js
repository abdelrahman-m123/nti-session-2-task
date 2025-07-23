
// function op(a,b,c){
//     if (c == "*"){
//         return a * b;
//     }else if (c == '+'){
//         return a + b;
//     }else if (c == '-'){
//         return a - b;
//     }else if (c == '/'){
//         return a / b;
//     }
// }

// console.log(op(1,2,"/"));



// function isSorted(s){
//     let x = true;
//     for(i = 0;i<s.length-1 ; i++){
//         if (s[i]> s[i+1]) {
//             x = false;
//             break;
            
//         }
        
//     }
//     console.log(x);
// }

// let b = [1,2,3,4,5];
// let a = [1,4,2,3,2,1];

// isSorted(b);
// isSorted(a);

// var removeDuplicates = function(nums) {
//     let k = 1;
//     let curr = nums[0];
//     let arr = [];
//     arr.push(nums[0]);
//     for (i = 1; i<nums.length  ; i++){
//         if (nums[i] != nums[i-1]){
//             k++;
//             curr = nums[i];
//             arr.push(nums[i]);
//         }
//     }
//     nums = arr
//     console.log(nums);
//     console.log(k);
// };

// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

// api task session 2
async function getFood(){
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await response.json();
    console.log(data);
    return data.meals;
}




async function searchFood(ingredient){
    const data = await getFood();
    

    return data.filter((food)=> {

        for (i= 0 ; i<= 20; i++){
            let key = `strIngredient${i}`;

            if (String(food[key]).toLowerCase() == ingredient.toLowerCase()) return true;

        }
        return false;

    })

}

async function main(){
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value;   
    var searchResult = await searchFood(searchText).then((msg)=>
        {
            console.log(msg);
            let p = document.getElementById("results");
            p.innerHTML = "";
            for (i = 0 ; i< msg.length ; i++){
                let x = document.createElement("div");
                let img = document.createElement("img");
                img.src = msg[i].strMealThumb;
                
                
                x.textContent=  msg[i].strMeal ;
                x.appendChild(img);
                p.appendChild(x);
            }
            

            
        });
   
}
document.getElementById("searchBtn").addEventListener("click", main);

// second task session 2

// let slots = ["a1","b3","c1"];

// function getSlotList (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(slots);
//         })
//     })
// }

// async function BookSlot(slot){
//     const slotList = await getSlotList();
//     if (slotList.find((slt)=> {
//         return slt === slot
//     })){
//         console.log("this slot is currently full");
//     }else{
//         slots.push(slot);
//         console.log("slot booked successfully");
//     }
// }

// BookSlot("a2");
