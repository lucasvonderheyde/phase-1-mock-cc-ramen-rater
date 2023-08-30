const ramenMenu = document.querySelector("#ramen-menu")
const ramenDetailsImage = document.querySelector(".detail-image")
const ramenDetailsName = document.querySelector(".name")
const ramenDetailsRestaurant = document.querySelector('.restaurant')
const ramenRatingDisplay = document.querySelector('#rating-display')
const ramenRatingComment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

console.log(ramenDetailsRestaurant)


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens =>{
    ramens.forEach(ramen =>{
        createRamenImage = document.createElement('img')
        createRamenImage.setAttribute('src', ramen.image)

        ramenMenu.append(createRamenImage)

        createRamenImage.addEventListener('click', e =>{
            ramenDetailsImage.src = ramen.image
            ramenDetailsName.textContent = ramen.name
            ramenDetailsRestaurant.textContent = ramen.restaurant
            ramenRatingComment.textContent = ramen.comment
            ramenRatingDisplay.textContent = ramen.rating
        })
    })
})

newRamenForm.addEventListener('submit', e =>{
    e.preventDefault()
    
    ramenDetailsName.textContent = e.target[0].value
    ramenDetailsRestaurant.textContent = e.target[1].value
    ramenDetailsImage.src  = e.target[2].value
    ramenRatingDisplay.textContent = e.target[3].value
    ramenRatingComment.textContent = e.target[4].value
    
})