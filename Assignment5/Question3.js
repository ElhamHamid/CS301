// Volume of the house(Question number 6 of ch-9)

'use strict';

function houseVolume(w,d,h,s){
    let housev;
    livingVolume(w,d,h);
    roofVolume(w,d,s)
    housev=livingv + roofv;
    console.log(housev);
}

function livingVolume(w,d,h){
    let livingv;
    livingv=w*d*h;
    return livingv;
}

function roofVolume(w,d,s){
    let roofv;
    trianglearea(w,d,s);
    roofv=area*w;
    return roofv;
}

function triangleArea(a,b,c){
    let area;
    let s=(a+b+c)/2;
    area=Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    return area;
}
houseVolume(1,2,3,4);
