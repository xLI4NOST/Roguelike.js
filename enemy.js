export function Enemy (x, y, gameZone) {

    var enemy = {
        x: 700,
        y: 150,
        character: document.createElement('div'),
        damage: 5,
        hp: 15
    }

    enemy.character.classList.add('tile')
    enemy.character.classList.add('tileE')
    gameZone.appendChild(enemy.character)
    enemy.character.style.top = y*50 + 'px'
    enemy.character.style.left = x*50 + 'px'

    
    this.renderEnemy = function (num) {
        for(let i = 0; i < num; i ++){
            gameZone.appendChild(enemy.character)
        }
    }
}