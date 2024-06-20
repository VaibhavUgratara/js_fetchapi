let anime_api=fetch("https://nekos.best/api/v2/sleep?amount=11")

anime_api.then((v)=>{
    return v.json()
}).then((value)=>{
    console.log(value)
    in_html=""
   for (i in value.results){
   let Cards=document.getElementById("Cards")
    in_html+=`<div class="card my-2 mx-2" style="width: 20rem;">
  <img src="${value.results[i].url}" class="card-img-top" alt="sleep" style="aspect-ratio: 2/1;">
  <div class="card-body">
    <h5 class="card-title">${value.results[i].anime_name}</h5>
  </div>
</div>`
   }
   Cards.innerHTML=in_html
})