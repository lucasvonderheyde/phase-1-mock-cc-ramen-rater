const ramenMenu = document.querySelector("#ramen-menu")
const ramenDetailsImage = document.querySelector(".detail-image")
const ramenDetailsName = document.querySelector(".name")
const ramenDetailsRestaurant = document.querySelector('.restaurant')
const ramenRatingDisplay = document.querySelector('#rating-display')
const ramenRatingComment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')
const editRamenForm =document.querySelector('#edit-ramen')


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens =>{
    ramens.forEach(ramen =>{
        createRamenImage = document.createElement('img')
        createRamenImage.setAttribute('src', ramen.image)

        ramenMenu.append(createRamenImage)

        createRamenImage.addEventListener('click', e =>{
            ramenDetailsName.textContent = ramen.name
            ramenDetailsRestaurant.textContent = ramen.restaurant
            ramenDetailsImage.src = ramen.image
            ramenRatingComment.textContent = ramen.comment
            ramenRatingDisplay.textContent = ramen.rating
        })
        ramenDetailsName.textContent = ramens[0].name
        ramenDetailsRestaurant.textContent = ramens[0].restaurant
        ramenDetailsImage.src = ramens[0].image
        ramenRatingComment.textContent = ramens[0].comment
        ramenRatingDisplay.textContent = ramens[0].rating
    })
})

newRamenForm.addEventListener('submit', e =>{
    e.preventDefault()
    createRamenImage = document.createElement('img')
    createRamenImage.setAttribute('src', e.target[2].value)
    ramenMenu.append(createRamenImage)

    const newRamenName = e.target[0].value
    const newRamenRestaurant = e.target[1].value
    const newRamenImage = e.target[2].value
    const newRamenDisplay = e.target[3].value
    const newRamenRating = e.target[4].value

    ramenDetailsName.textContent = e.target[0].value
    ramenDetailsRestaurant.textContent = e.target[1].value
    ramenDetailsImage.src  = e.target[2].value
    ramenRatingDisplay.textContent = e.target[3].value
    ramenRatingComment.textContent = e.target[4].value

    createRamenImage.addEventListener('click', e =>{
        ramenDetailsName.textContent = newRamenName
            ramenDetailsRestaurant.textContent = newRamenRestaurant
            ramenDetailsImage.src = newRamenImage
            ramenRatingDisplay.textContent = newRamenDisplay
            ramenRatingComment.textContent = newRamenRating
            
    })
})