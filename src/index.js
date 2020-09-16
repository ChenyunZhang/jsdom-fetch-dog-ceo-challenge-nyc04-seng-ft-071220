// console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then((dogObj) => {
        // let dogArr = document.querySelector("#dog-image-container");
        let dogsUl = document.querySelector("#dog-breeds");
        // create an array variable to hold the url items
        let dogUrl = dogObj.message;
        console.log(dogObj);
        for(const url of dogUrl){
            let dogLi = document.createElement("li");
                dogLi.innerText = "Doge";
            let dogImg = document.createElement("img");
            dogImg.src = url;
            dogImg.alt = "dog"
            // console.log(dogLi.src);
            dogLi.append(dogImg);
            dogsUl.append(dogLi);
            dogLi.addEventListener("click", ()=> {dogLi.style.color = "orange"});
        }
    })
});


