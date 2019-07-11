const renderer = new Renderer()

const getRecipes = function () {
    let input = $("#ingredient-input").val()
    $.get(`/recipes/${input}`, function (data) {
        // $('.recipes-container').empty()
        // const source = $('#recipes-template').html()
        // const template = Handlebars.compile(source)
        // const someHTML = template({data})
        // $('.recipes-container').append(someHTML)
        // console.log(data)
        renderer.render({data})
    })
}

