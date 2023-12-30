
/*
SOLVED! I actually understand this one too.

I had this idea that I wanted a solid color, but then take out a 
half sin-wave shaped chunk (also half the size of the canvas).

Here's how I worked through that...
*/



function setup() {
    canvas_dims = 800
    createCanvas(canvas_dims, canvas_dims);
    background(245, 245, 245);

    loop_step_size = 1
    num_sins = 1 // TODO / WIP; I want the number of sin waves to be dynamic, and the dots populate automatically

    stroke(255, 100, 0);
    fill(255, 100, 0);
    strokeWeight(2);
    for (let i = 2; i < canvas_dims; i=i+loop_step_size) {

        // This is how I worked it out...
        // console.log(Math.PI/canvas_dims * i, " : ", Math.sin(Math.PI/canvas_dims * i));


        line(
            // chop PI up into 800 slices to normalize it. 
            (Math.sin(Math.PI*(num_sins*2)/canvas_dims * i) * (canvas_dims/2)) + (canvas_dims/2), // x1
            i,              // y1
            canvas_dims,    // x2 
            i               // y2
        );
    }

    // These need to be in a for loop in order to support num_sins being dynamic
    strokeWeight(0);
    ellipse(canvas_dims/2, canvas_dims/4, 50, 50);

    fill(245, 245, 245);
    ellipse(canvas_dims/2, canvas_dims/4*3, 50, 50);

}

