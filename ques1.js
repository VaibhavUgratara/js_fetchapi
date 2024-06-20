let memes=fetch("https://api.imgflip.com/get_memes")
memes.then((response)=>{
    return response.json()
}).then((value)=>{
    let m=value.data.memes
    let iHTML=""
    let temp=document.getElementById("templates")
    for (i in m){
        iHTML+=
`<div class="card mb-3 mx-2 border-dark" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${m[i].url}" class="img-fluid rounded-start" alt="${m[i].id}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${m[i].name}</h5>
        <a href="${m[i].url}" target="_blank" class="btn btn-dark">Open Image</a>
      </div>
    </div>
  </div>
</div>`
temp.innerHTML=iHTML
    }
})
