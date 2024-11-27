function setup(){
    createCanvas(800, 800)
}

function draw(){
    for (y=0; y<height; y++){
        let r = map(y, 0, height, 0, 255)
        let g = map(y, 0, height, 255, 0)
        stroke(r, g, 150)
        line(0, y, width, y)
    }
}