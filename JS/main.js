const button = document.querySelector('.view-recipe')


button.addEventListener('submit', (e) => {
    e.preventDefault()
    searchQuery = e.target.querySelector('.input').value;
    console.log(searchQuery)
});



fetch('https://test-es.edamam.com/search')
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
    })






    /*const button = document.querySelector('.view-recipe')


button.addEventListener('submit', (e) => {
    e.preventDefault()
    searchQuery = e.target.querySelector('.input').value;
    console.log(searchQuery)
});



fetch('https://randomuser.me/api/')
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
    })

*/