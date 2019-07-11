const getRecipes = function () {
    let input = $("#ingredient-input").val()
    $.get(`/recipes/${input}`, function (ingredient) {
        console.log(ingredient)
        // $('.players-container').empty()
        // const source = $('#player-template').html()
        // const template = Handlebars.compile(source)
        // const someHTML = template({player})
        // $('.players-container').append(someHTML)
        // console.log(player)
    })
}
