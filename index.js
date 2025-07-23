
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
