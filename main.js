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
        plane: 'images/plane.png',
        bullet: 'images/bullet.png',
        particle: 'images/particle.png',
        bg0: 'images/bg0.png',
        bg1: 'images/bg1.png',
        cloud0: 'images/cloud0.png',
        cloud1: 'images/cloud1.png',
        cloud2: 'images/cloud2.png',
        enemy0: 'images/enemy0.png',
        enemy1: 'images/enemy1.png',
        enemy2: 'images/enemy2.png',
        enemy3: 'images/enemy3.png',
        enemy4: 'images/enemy4.png',
        enemy5: 'images/enemy5.png',
    }
    var game = new Game(30, images, function () {
        var s = new TitleScene(game)
        game.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()

