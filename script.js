fetch("https://api.giphy.com/v1/gifs/random?api_key=wavRKzEpKiJSj4ZNVk49OAGjU79n0SmU&tag=sailormoon&rating=g")

.then(function(response) {
    if (response.status = 200) {
        return response.json()
    }
    else {
        console.log("Whoops problem!")
    }
})

.then(function(jsonData) {
    console.log(jsonData)

    var gifUrl = jsonData.data.images.original.url
    console.log(gifUrl)

    var gifImg = document.createElement("img")
    gifImg.setAttribute("src", gifUrl)

    document.body.appendChild(gifImg)
})

.catch(function(error) {
    console.log("There's a problem!", error)
})