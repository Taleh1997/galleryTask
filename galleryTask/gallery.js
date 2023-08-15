const galleryInp = document.getElementById("galleryInp")
const divList = document.getElementById("divList")
let gallery = []

galleryInp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    gallery.push(galleryInp.value)
    galleryInp.value = ""
    galleryShow()
  }
})

function galleryShow() {
  const galleryContent = gallery.map((imgUrl, index) => {
    return `
  <div class="col">
  <div class="card" style="width: 18rem">
    <img
      src="${imgUrl}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text">Galery | Picture ${index + 1}</p>
    </div>
  </div>
</div>
`
  }).join("")

  divList.innerHTML = galleryContent
}