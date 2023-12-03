export function Gamer (gameZone, locationMap){
    var player = {
        x: 50,
        y: 50,
        character: document.createElement('div'),
        damage: 0,
        hp: 10
    }
    player.character.style.top = player.y + 'px'
    player.character.style.left = player.x + 'px'
    player.character.classList.add('tile')
    player.character.classList.add('tileP')
    gameZone.appendChild(player.character)
    let yCount = 1
    let xCount = 1
    this.controller = function () {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 87: //w
                    if (locationMap[yCount - 1][xCount] !== 1) {
                        player.character.style.top = `${player.y -= 50}px`
                        yCount -= 1
                    }
                    break
                case  83://s
                    if (locationMap[yCount + 1][xCount] !== 1) {
                        player.character.style.top = `${player.y += 50}px`
                        yCount += 1
                    }
                    break
                case 65:///a
                    player.character.style.transform = 'rotateY(180deg)'
                    if (locationMap[yCount][xCount - 1] !== 1) {
                        player.character.style.left = `${player.x -= 50}px`
                        xCount -= 1
                    }
                    break
                case 68://d
                    player.character.style.transform = 'rotateY(0deg)'
                    if (locationMap[yCount][xCount + 1] !== 1) {
                        player.character.style.left = `${player.x += 50}px`
                        xCount += 1
                    }
            }
            if (locationMap[yCount][xCount] === 3) {
                player.hp += 10
                locationMap[yCount][xCount]=0
                console.log(xCount,yCount)
                var current = document.querySelector(`.c${xCount}-${yCount}`)
                var audio = document.querySelector('.audioHp')
                audio.play()
                current.classList.remove('tileHP')
                console.log(locationMap[yCount][xCount])
            }
            if (locationMap[yCount][xCount] === 2) {
                player.damage += 10
                locationMap[yCount][xCount] = 0
                var current = document.querySelector(`.c${xCount}-${yCount}`)
                var audio = document.querySelector('.audioSw')
                audio.play()
                current.classList.remove('tileSW')
                console.log(locationMap[yCount][xCount])
            }


        })
    }
}