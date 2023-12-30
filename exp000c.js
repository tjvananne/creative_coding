
/*
This is kinda funky. I also don't understand how it's working at all.
*/



function setup() {
    canvas_dims = 800
    createCanvas(canvas_dims, canvas_dims);
    background(245, 245, 245);

    loop_step_size = 1

    stroke(255, 100, 0);
    strokeWeight(2);
    for (let i = 0; i < 800; i=i+loop_step_size) {
        //x_adjust = abs(Math.sin(i / Math.PI)); // this PI is kinda meaningless. It could be any number, really...
        x_adjust = abs(Math.sin(i / 3.5)); // WOAH! I was wrong. Changing this value can drastically change the visual. 3.5 is special for some reason...
        line(
            x_adjust * canvas_dims, 
            i, 
            canvas_dims * (x_adjust * 1.2), 
            i
        );
    }

}

