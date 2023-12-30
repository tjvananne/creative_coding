
/*
SOLVED! I actually understand this one too.

I had this idea that I wanted a solid color, but then take out a 
half sin-wave shaped chunk (also half the size of the canvas).

Then I wanted to show the full sin wave, so I shifted everything
over by half the canvas width. This looked kinda yin yang like.
So I wanted to see what it would look like if I put the alternating
circles on the peaks/troughs of each sin wave. But then I wanted
to dynamically control how many sin waves were shown. And then I
wanted the dots to dynamically match however many sin waves were
shown. And this is what I ended up with!
*/


function setup() {

    // config
    num_sins = 1; // This is what I'm most proud of here. This is totally dynamic. It even supports irrational numbers.
    canvas_dims = 1000
    color_R = 255;
    color_G = 100;
    color_B = 0;
    color_whitespace = 200;
    loop_step_size = 1;
    initial_stroke_weight = 2;

    createCanvas(canvas_dims, canvas_dims);
    background(color_whitespace);
    strokeWeight(initial_stroke_weight);
    stroke(color_R, color_G, color_B);
    fill(color_R, color_G, color_B);

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


    //// (manually figuring out how this should work with num_sins = 2)
    // ellipse(canvas_dims/2, canvas_dims/8*1, 50, 50);
    // ellipse(canvas_dims/2, canvas_dims/8*5, 50, 50);

    // fill(245, 245, 245);
    // ellipse(canvas_dims/2, canvas_dims/8*3, 50, 50);
    // ellipse(canvas_dims/2, canvas_dims/8*7, 50, 50);


    /*
    Ok, I get how to make this dynamic now... y2 is the only value that changes.

    Loop from 1 through (including) 4 * num_sins. Name our loop variable `i`.

        Take the canvas_dims and divide that by 4 * num_sins.
        If `i` is even, do nothing.
        Alternate on every odd iteration between a colored and white circle.

    */

    strokeWeight(canvas_dims/80);
    fill_with_color = true
    for (let i = 1; i < num_sins*4; i++) {
        
        if (i % 2 == 0) {continue}

        // state machine instead? Or some kind of calculation to determine which one to do?
        if (fill_with_color) {
            fill(color_R, color_G, color_B);
            fill_with_color = false;
        } else {
            fill(color_whitespace);
            fill_with_color = true;
        }

        ellipse(canvas_dims/2, canvas_dims/(num_sins*4)*i, canvas_dims/16, canvas_dims/16);
    }

}

