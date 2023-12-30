



function setup() {
    canvas_dims = 800
    createCanvas(canvas_dims, canvas_dims);
    background(245, 245, 245);

    for (let i = 0; i < canvas_dims; i=i+2) {
        // I do not even remotely understand the patterns that this is creating
        // on my screen. I feel like I can follow what the code is doing, but
        // the result is not matching what I'd expect. Is there something else
        // going on here in terms of how graphics work? Anti-aliasing or something?
        line(0, 0, canvas_dims, i);
        line(0, 0, canvas_dims-i, i);
    }
}

