class EndScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', () => {
            var s = new TitleScene(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.font = "40pt Georgia";            //设置文本大小 + 字体
        this.game.context.fillStyle = "black";
        this.game.context.fillText("GAME  OVER 按 R 返回标题页面", 300, 400, 100)
    }
}