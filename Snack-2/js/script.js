var footballClubs = [
    club1 = {
        name: "Juventus F.C.",
        scores: 0,
        foulsSuffered: 0
    },
    club2 = {
        name: "Chelsea F.C.",
        scores: 0,
        foulsSuffered: 0
    },
    club3 = {
        name: "Manchester United F.C.",
        scores: 0,
        foulsSuffered: 0
    }
]
const getRndinteger = (min, max) => Math.floor(Math.random)
var newArray = [];
for (let i = 0; i < footballClubs.length; i++) {
    footballClubs[i].scores = getRndinteger(0, 100);
    footballClubs[i].foulsSuffered = getRndinteger(0, 100);
    var {name, foulsSuffered} = footballClubs[i];
    newArray.push({name, foulsSuffered});
}
console.log(newarray);