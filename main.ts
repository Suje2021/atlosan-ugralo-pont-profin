let y = 0
let x = 0
for (let index = 0; index < 4; index++) {
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        x += 1
        y += 1
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
}
