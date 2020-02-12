class DigitalClock {
  constructor(span, h, m,s) {
    this.h = h;
    this.m = m;
    this.s = s;
    this.span = span;
    this.render(this.span, this.h , this.m, this.s)
  }

  render(span, h , m, s) {
    setTimeout(function tick(){
    s++;
   
    if (s<"10") {
      s.toString();
      let ss = "0"+s;
      s = ss;
    }
    if (parseInt(m)<10) {
      m.toString();
      let mm = "0"+m;
      m = mm;
    }
    span.innerHTML = h+':'+m+":"+s;
  setTimeout(tick, 1000);
  }, 1000);
  }
}

class Adapter {
  constructor(clock) {
    let span = document.getElementById("span1")
    this.dClock = new DigitalClock(span, clock.degh/6, clock.degm/6, clock.degs/6)
  }
}

class Clock {
  constructor(span, h, m, s) {
    this.degh = h;
    this.degm = m;
    this.degs = s;
    this.degPlus(span, this.degh,this.degm,this.degs);
  }

  degPlus(span, h,m,s){

    setTimeout(function tick(){
    s+=6;
    if (s==360) {
      m+=6;
      s=0;
    }
    if (m==360) {
      h+=6;
      m=0;
    }
    span.innerHTML = h+':'+m+":"+s;
    setTimeout(tick, 1000);
    this.degh = h;
    this.degm = m;
    this.degs = s;
    },1000);
  };
}

let span = document.getElementById("span");
let span2 = document.getElementById("span2");

let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

let dClock = new DigitalClock(span, h, m, s);
let clock = new Clock(span2, h*6, m*6, s*6);
let adapter = new Adapter(clock);
