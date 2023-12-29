

/*
I originally wanted horizontal lines that were spaced far apart and
got closer and closer together until it hit some kind of "reset" point
and then they were back to being further away from each other. I wanted
that pattern to repeat over and over. I guess I accidentally did the
opposite though. The lines start off close together and get further
and further apart until hitting the reset that puts them closer. I could
probably do some kind of 20/x or 1/x to invert that, if I want.

But I also made another mistake. I had 0,0 as my hard coded x1,y1 values,
which made every line start from the origin, creating a really cool
diagonal effect along with my repeatedly different spaced out pattern thing.

Then, when I went to comment out the diagonal lines and add the horizontal
ones in, I accidentally left them both there. This created an interesting
pattern that almost reminds me of perspective in those synthwave outrun
visuals. Maybe that'll be one of my next challenges.

Also, at first, I was experimenting with Math.sin(), but that wasn't
getting me what I wanted and it resulted in a lot of infinite loops. Then
when I stopped to consider what I was actually trying to accomplish, I
realized that the repeated pattern I was intending exactly matches what
the modulo operator does.
*/

function setup() {
    canvas_dims = 800
    createCanvas(canvas_dims, canvas_dims);
    background(245, 245, 245);
    strokeWeight(1);
    total_y = 0
    max_iter = 30000 // so this actually matters if we want the whole thing filled in
    for (let i=0; i<max_iter; i=i+1) {
        total_y += ((i % 20) / 20) * 20;
        stroke(135, 200, 100);
        strokeWeight(1);
        line(0, 0, canvas_dims, 0+total_y); // kinda cool angles
        strokeWeight(3);
        line(0, 0+total_y, canvas_dims, 0+total_y); // horizontal bars
    }
}

