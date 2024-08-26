const tool = new Tool("Door")
Game.on("initialSpawn",p=>{
  p.addTool(tool)
    let ownsAsset = await p.ownsAsset(690)
})

function roundTo(num,rnd) {
  return Math.round(num/rnd)*rnd
}

tool.on("activated",p=>{
    if (ownsAsset = true) {
      let brick = new Brick(p.position,new Vector3(4,4,8),"#906847")
      Game.newBrick(brick)
      brick.setPosition(new Vector3(roundTo(brick.position.x,4)-2, roundTo(brick.position.y,4)-2, roundTo(brick.position.z,4)))
      brick.clickable = true
      brick.collision = false
    }
}) 

