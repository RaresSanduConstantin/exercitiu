let direction = ['s','n','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dt = walk.length

    
    for (let i = 0; i < walk.length; i++) {
     if(walk[i] === 'n'){
         dx = dx + 1;
     } else if(walk[i] === 's'){
         dx = dx - 1;
     } else if (walk[i] === 'w'){
         dy = dy + 1;
     } else if(walk[i] === 'e'){
         dy = dy -1;
     }
    }
if(dt === 10 && dx === 0 && dy === 0){
    return true}
    return false

  }

console.log(isValidWalk(direction))