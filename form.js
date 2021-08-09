class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("CAR RACING GAME")
        title.position(500,0)

        var input=createInput("name")
        input.position(500,150)

        var button=createButton('PLAY')
        button.position(500,190)

        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello "+name)
            greeting.position(500,150)
        })
    }
}