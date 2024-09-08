/*Chapter 17: The Full Math Toolbox at the                                                  Diner
The Math functions are like special tools in the restaurant—each serving a purpose, whether it's calculating costs, determining optimal cooking times, or even randomizing the menu. Here’s the complete lineup:

1. Basic Rounding and Precision – Math.round, Math.ceil, Math.floor, Math.trunc
Math.round(x): Rounds the number x to the nearest integer.

                                                
                         
*/
let price = 15.7;
console.log(Math.round(price)); // Output: 16 (rounds up from 0.7)
Math.ceil(x):// Rounds x up to the nearest integer.



let discount = 12.3;
console.log(Math.ceil(discount)); // Output: 13 (always rounds up)
Math.floor(x): //Rounds x down to the nearest integer.



let serviceCharge = 7.9;
console.log(Math.floor(serviceCharge)); // Output: 7 (always rounds down)
Math.trunc(x):

// Truncates x, removing any fractional part.

                       
 
let bill = 18.5;
console.log(Math.trunc(bill)); // Output: 18 (removes decimals without rounding)

2. Powers and Roots – Math.pow, Math.sqrt, Math.cbrt
Math.pow(base, exponent): //Raises the base to the power of the exponent.

                        
 .
console.log(Math.pow(2, 3)); // Output: 8 (2 to the power of 3)
Math.sqrt(x):
// Returns the square root of x.

                         
 
console.log(Math.sqrt(25)); // Output: 5 (square root of 25)
Math.cbrt(x):
// Returns the cube root of x.

                          
  
console.log(Math.cbrt(27)); // Output: 3 (cube root of 27)
//3. Exponential and Logarithmic Functions – Math.exp, Math.log, Math.log10, Math.log2
Math.exp(x): 
//Returns e (Euler’s number) raised to the power of x.

                           
   
console.log(Math.exp(1)); // Output: 2.718281828459045 (value of e^1)
Math.log(x): Returns the natural logarithm (base e) of x.

                            
    
console.log(Math.log(10)); // Output: 2.302585092994046 (natural log of 10)
Math.log10(x): Returns the base-10 logarithm of x.

                             
     
console.log(Math.log10(100)); // Output: 2 (log base 10 of 100)
Math.log2(x): Returns the base-2 logarithm of x.

                              
      
console.log(Math.log2(8)); // Output: 3 (log base 2 of 8)
4. Trigonometric Functions – Math.sin, Math.cos, Math.tan
Math.sin(x): Returns the sine of x (x is in radians).

                               
       
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)
Math.cos(x): Returns the cosine of x (x is in radians).

                                
        
console.log(Math.cos(Math.PI)); // Output: -1 (cosine of 180 degrees)
Math.tan(x): Returns the tangent of x (x is in radians).

                                 
         
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of 45 degrees)
5. Inverse Trigonometric Functions – Math.asin, Math.acos, Math.atan, Math.atan2
Math.asin(x): Returns the arcsine of x (result in radians).

                                  
          
console.log(Math.asin(1)); // Output: 1.5707963267948966 (π/2 radians)
Math.acos(x): Returns the arccosine of x (result in radians).

                                   
           
console.log(Math.acos(0)); // Output: 1.5707963267948966 (π/2 radians)
Math.atan(x): Returns the arctangent of x (result in radians).

                                    
            
console.log(Math.atan(1)); // Output: 0.7853981633974483 (π/4 radians)
Math.atan2(y, x): Returns the angle in radians between the positive x-axis and the point (x, y).

                                     
             
console.log(Math.atan2(1, 1)); // Output: 0.7853981633974483 (π/4 radians)
6. Rounding Towards Zero – Math.sign, Math.abs
Math.sign(x): Returns the sign of x (-1, 0, or 1).

                                      
              
console.log(Math.sign(-10)); // Output: -1 (negative)
console.log(Math.sign(0));   // Output: 0 (zero)
console.log(Math.sign(10));  // Output: 1 (positive)
Math.abs(x): Returns the absolute value of x.

                                       
               
console.log(Math.abs(-42)); // Output: 42 (removes negative sign)
7. Minimum and Maximum – Math.min, Math.max
Math.min(...values): Finds the smallest number in a set.

                                        
                
console.log(Math.min(4, 1, 7, 0)); // Output: 0
Math.max(...values): Finds the largest number in a set.

                                         
                 
console.log(Math.max(4, 1, 7, 0)); // Output: 7
8. Generating Random Numbers – Math.random
Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).

                                          
                  
console.log(Math.random()); // Output: random value between 0 and 1
9. Hyperbolic Functions – Math.sinh, Math.cosh, Math.tanh
Math.sinh(x): Returns the hyperbolic sine of x.

                                           
                   
console.log(Math.sinh(1)); // Output: 1.1752011936438014
Math.cosh(x): Returns the hyperbolic cosine of x.

                                            
                    
console.log(Math.cosh(1)); // Output: 1.5430806348152437
Math.tanh(x): Returns the hyperbolic tangent of x.

                                             
                     
console.log(Math.tanh(1)); // Output: 0.7615941559557649
10. Miscellaneous Functions – Math.hypot, Math.clz32, Math.fround
Math.hypot(...values): Returns the square root of the sum of squares of its arguments (useful for calculating the Euclidean distance).

                                              
                      
console.log(Math.hypot(3, 4)); // Output: 5 (hypotenuse of a right triangle)
Math.clz32(x): Returns the number of leading zeroes in the 32-bit binary representation of x.

                                               
                       
console.log(Math.clz32(1)); // Output: 31
Math.fround(x): Returns the nearest 32-bit single precision float representation of x.

                                                
                        
console.log(Math.fround(1.337)); // Output: 1.3370000123977661