let song = "AWUBWUBWUBBWUBWUBWUBC"

function songDecoder(song){
    let res = song.split("WUB").join(" ").trim()
    let ddd = res.replace(/ +/g," ")
    return ddd;
  }

console.log(songDecoder(song))