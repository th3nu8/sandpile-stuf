Game.on("playerJoin", async(p) => {
    let ownsAsset = await p.ownsAsset(691)
    if (ownsAsset == false) {
        let ownsAsset = await p.ownsAsset(690)
    }
    if (ownsAsset == false) {
        p.setAvatar(648)
        p.centerPrint("Buy paid acsess to get your avatar!" 10)
    }
})
function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras, Color) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#000000")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
Game.command("clearplz", (caller, args) => {
    Game.clearMap(); Game.centerPrintAll("Bricks have been cleared.", 3)
})
