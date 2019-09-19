var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        }
    })
}

// var loadLevel = (game) => {
//     var level = levels[0]
//     enemies = new Array()
//     for (let i = 0; i < level.length; i++) {
//         var p = level[i]
//         var e = Enemy(game, p)
//         enemies.push(e)
//     }
//     return enemies
// }

var __main = function () {
    var images = {
        plane: 'static/images/plane.png',
        bullet: 'static/images/bullet.png',
        boom: 'static/images/boom.png',
        bg0: 'static/images/bg0.png',
        bg1: 'static/images/bg1.png',
        cloud0: 'static/images/cloud0.png',
        cloud1: 'static/images/cloud1.png',
        cloud2: 'static/images/cloud2.png',
        enemy0: 'static/images/enemy0.png',
        enemy1: 'static/images/enemy1.png',
        enemy2: 'static/images/enemy2.png',
        enemy3: 'static/images/enemy3.png',
        enemy4: 'static/images/enemy4.png',
        enemy5: 'static/images/enemy5.png',
    }
    var game = new Game(30, images, function () {
        var s = new TitleScene(game)
        game.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()

