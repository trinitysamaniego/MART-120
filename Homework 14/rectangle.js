class Rectangle{

//constructor
//x= x cord, y= y cord, w= width, h= height, r= red, g= green, b= blue
constructor(x,y,w,h,r,g,b)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display()
  {
      fill(this.r, this.b, this.g);
      rect(this.x,this.y, this.w, this.h);
  }
}
