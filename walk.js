let direction = ['n','s','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
    if(walk.length > 10 || walk.length === 0 || walk.length < 10) {
        return false
    } 

    let road = [];

    let directions = {
        'n':'s',
        
        'w':'e',
        
    }
    for(let i = 0; i< walk.length; i++){
        if(walk[i] === 'n' || walk[i] === 'w'){
            road.push(walk[i])
        } else {
            let last = road.pop()

            if(walk[i] !== directions[last]){
                return false;
            }
        }
        
    }

    if(road.length !== 0) {
        return false
    }
    return true;
}

console.log(isValidWalk(direction))