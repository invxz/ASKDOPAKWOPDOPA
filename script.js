let color = document.querySelector("#color")
let btn = document.querySelector("#btn")
let inputFile = document.querySelector(".inputFile")
let img = document.querySelector("#img")


color.addEventListener("change",()=>{
    document.querySelector("h1").style.background = color.value
    btn.style.background = color.value
})

btn.addEventListener("click",()=>{
    inputFile.click()
    let file = inputFile.files[0]
    if(!file)return
    img.src = URL.createObjectURL(file)
})


