(function () {
// On page load:
//
//     Display a "loading..." message✅
// Make an AJAX request to get a listing of all the movies ✅
// When the initial AJAX request comes back, remove the "loading" message and replace it with HTML generated from the json response your code receives ✅



// Allow users to add new movies
//
// Create a form for adding a new movie that has fields for the movie's title and rating✅
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form✅


// Allow users to edit existing movies
//
// Give users the option to edit an existing movie
// A form should be pre-populated with the selected movie's details
// Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.


// Delete movies
//
// Each movie should have a "delete" button✅
// When this button is clicked, your javascript should send a DELETE request✅





<!--this adds spinner-->
const wait = ms => new Promise(resolve => setTimeout(resolve,ms));
wait(7000).then(() => {
    $('.center').hide();
})





//this prints movies on to html🟢🟢🟢🟢🟢
wait(7100).then(() => {
    fetch('https://wiry-cookie-buttercup.glitch.me/movies')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let newHtml = "";
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].title);
                newHtml += `<div class="col-4">
                                    <div class="card rgb" >
                                        <div class="card-image" id="card${data[i].id}"></div>
                                        <div class="card-text">
                                            <h4>Title: ${(data[i].title)}</h4>
                                            <p>Rating: ${data[i].rating}</p>
                                            <p>ID: ${data[i].id}</p>
                                            <button type="button" class="btn  btn-sm" id="${data[i].id}">Delete</button>
                                        </div>
                                    </div>
                                </div>`
            }
            $('#loading').html(newHtml);


        })
        .catch((error) => console.log(error))





    //this allows user to input movies🟢🟢🟢🟢🟢
    $('#submit').click(function (e) {
        e.preventDefault();
        const blogPost = {title: ($('#movieTitle').val()).toUpperCase(), rating: $('#movieRating').val()};
        const url = 'https://wiry-cookie-buttercup.glitch.me/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogPost),
        };
        fetch(url, options)
            .then(/* post was created successfully */)
            .catch(/* handle errors */)

        wait(1000).then(() => {
            fetch('https://wiry-cookie-buttercup.glitch.me/movies')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let newHtml = "";
                    for (let i = 0; i < data.length; i++) {
                        newHtml += `<div class="col-4">
                                            <div class="card rgb" >
                                                <div class="card-image" id="card${data[i].id}"></div>
                                                <div class="card-text">
                                                    <h4>Title: ${(data[i].title).toUpperCase()}</h4>
                                                    <p>Rating: ${data[i].rating}</p>
                                                    <p>ID: ${data[i].id}</p>
                                                    <button type="button" class="btn  btn-sm" id="${data[i].id}">Delete</button>
                                                </div>
                                            </div>
                                        </div>`
                    }
                    $('#loading').html(newHtml);

                })
        })
    })
})


//this allows user to add pre-populated movie
$('#addition').click(function (e) {
    e.preventDefault();
    console.log($('#title1').val());
    const blogPost = {title: $('#title1').attr("placeholder"), rating: $('#rating1').attr("placeholder")};
    const url = 'https://wiry-cookie-buttercup.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogPost),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */)

    wait(1000).then(() => {
        fetch('https://wiry-cookie-buttercup.glitch.me/movies')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let newHtml = "";
                for (let i = 0; i < data.length; i++) {
                    newHtml += `<div class="col-4">
                                            <div class="card">
                                                <div class="card-image rgb"></div>
                                                <div class="card-text">
                                                    <h4>Title: ${(data[i].title).toUpperCase()}</h4>
                                                    <p>Rating: ${data[i].rating}</p>
                                                    <p>ID: ${data[i].id}</p>
                                                    <button type="button" class="btn  btn-sm" id="${data[i].id}">Delete</button>
                                                </div>
                                            </div>
                                        </div>`
                }
                $('#loading').html(newHtml);

            })
    })
})



//this deletes movies❌❌❌❌❌
$(document).on('click', "button.btn-sm", function (e) {
    e.preventDefault();
    let movieId = $(this).attr("id");
    console.log(movieId)
    fetch(`https://wiry-cookie-buttercup.glitch.me/movies/${movieId}`, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            wait(1000).then(() => {
                fetch(`https://wiry-cookie-buttercup.glitch.me/movies`)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);


                        let newHtml = "";
                        for (let i = 0; i < data.length; i++) {

                            newHtml += `<div class="col-4">
                                                <div class="card rgb">
                                                    <div class="card-image" id="card${data[i].id}"></div>
                                                    <div class="card-text">
                                                        <h4>Title: ${(data[i].title).toUpperCase()}</h4>
                                                        <p>Rating: ${data[i].rating}</p>
                                                        <p>ID: ${data[i].id}</p>
                                                        <button type="button" class="btn  btn-sm" id="${data[i].id}">Delete</button>
                                                    </div>
                                                </div>
                                            </div>`
                        }
                        $('#loading').html(newHtml);
                    })
            })
        })
})


//Adds an audio sound on the click of submit button🐰🐰🐰🐰🐰
$('#submit').on('click', function () {
    var obj = document.createElement('audio');
    obj.src = 'sounds/gojira_roar.mp3';
    obj.play();
});
})();
