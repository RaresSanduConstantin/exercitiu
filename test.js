const obj = new Map();
const input = 'banana'

for(let i =0 ; i< input.length; i++){
    if (obj.has(input[i])) {
        let value = obj.get(input[i]);
        value = [...value, i];
        obj.set(input[i], value);
        continue;
      }
      obj.set(input[i], [i]);
    }


console.log(obj)