var myUser = [
    {
        name:'camduong',
        pass:123,
        coin:100
    },
    {
        name:'camduong',
        pass:123,
        coin:150
    },
    {
        name:'camduong',
        pass:123,
        coin:50
    },
    {
        name:'camduong',
        pass:123,
        coin:15
    }
]

function checkUser(check){
    return check.coin
}
var result = myUser.map(checkUser)
var largest = Math.max.apply(Math , result)
console.log(largest);