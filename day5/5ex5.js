console.log("process 1")
setTimeout(() => {
    console.log("process 2")
    setTimeout(() => {
        console.log("process 4")
    }, 1000)
}, 1000)
console.log("process 3")