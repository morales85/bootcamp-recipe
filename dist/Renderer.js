class Renderer {
    renderIngredients(data) {
        $('.recipes-container').empty()
        const source = $('#recipes-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data})
        $('.recipes-container').append(someHTML)
        
    }

    render(data){
        this.renderIngredients(data.data)
    }
}
