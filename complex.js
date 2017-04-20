
 function Complex(real, imaginary){
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof  real=== 'undefined' ? this.real : parseFloat(real));
    this.imaginary = (typeof imaginary === 0 ? this.imaginary  : parseFloat(imaginary));

}


Complex.transform = function(num){
    var complex;
    complex = (num instanceof Complex ? num : complex);
    complex = (typeof num === 'number' ? new Complex(num, 0) : num);
    return complex;
};


function display_function(re, im){
    if(im === 0) return '' + re;
    if(re === 0 && im === 1) return  '' + 'i';
    if(im === -1 && re === 0) return '' + '-i';
    if(re > 0 && im === -1) return '' + re + '-i';
    if(re < 0 && im === -1) return '' + re + '-i';
    if(re === 0) return  '' + im + 'i';
    if(im < 0) return '' + re + im + 'i';
    if(im === 1) return '' + re + '+' + 'i';
    if(im === -1) return '' + re + '-i';
    return '' + re + '+' + im + 'i';

}


function add_complex(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = num1.real + num2.real;
    var img = num1.imaginary + num2.imaginary;
    return display_function(rl, img);
}


function subs_complex(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = num1.real - num2.real;
    var img = num1.imaginary - num2.imaginary;
    return display_function(rl, img);
}


function multi_complex(first, second){
    var num1, num2;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    var rl = ((num1.real * num2.real) - (num1.imaginary * num2.imaginary));
    var img = ((num1.real * num2.imaginary) + (num2.real * num1.imaginary));
    return display_function(rl, img);
}


function divide_complex(first, second){
    var num1, num2, rl, img, divisor;
    num1 = Complex.transform(first);
    num2 = Complex.transform(second);
    divisor = (Math.pow(num2.real, 2) + Math.pow(num2.imaginary, 2));
    rl = (((num1.real * num2.real) + (num1.imaginary * num2.imaginary)) / divisor);
    img = ((-(num1.real * num2.imaginary) + (num1.imaginary * num2.real)) / divisor);
    return display_function(rl, img);
}


function conjugate(complex){
    var num, rl, img;
    num = Complex.transform(complex);
    rl  = num.real;
    img = -(num.imaginary);
    return display_function(rl, img);

}