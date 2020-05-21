1. Filter Unique Values From an Array

    Using Set:
    -------------
    const array = [1, 1, 2, 3, 5, 5, 1];
    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray); // Result: [1, 2, 3, 5]

    Using Filter:
    ---------------
    const array = [1, 1, 2, 3, 5, 5, 1];
    const uniqueArray = array.filter( (currentValue, currentIndex, array) => currentIndex === array.lastIndexOf(currentValue) )
    console.log(uniqueArray); // Result: [2, 3, 5, 1]
    
2. Convert to Boolean
    
    Using !!:
    ------------
    The Double NOT operator or !! coerces the value on the right side into a boolean. 
    Basically it's a fancy way of converting a value into a boolean.

    console.log(!!null); //logs false
    console.log(!!undefined); //logs false
    console.log(!!''); //logs false
    console.log(!!0); //logs false
    console.log(!!NaN); //logs false
    console.log(!!' '); //logs true
    console.log(!!{}); //logs true
    console.log(!![]); //logs true
    console.log(!!1); //logs true
    console.log(!![].length); //logs false

4. Convert to String

    Using (+""): 
    -----------------
    To quickly convert a number to a string, we can use the concatenation
    operator + followed by an empty set of quotation marks "" .

    const val = 1 + "";
    console.log(val); // Result: "1"
    console.log(typeof val); // Result: "string"

5. Convert to number

    Using (+):
    -----------
    let int = "15";
    int = +int;
    console.log(int); // Result: 15
    console.log(typeof int); Result: "number"

    Using Double bitwise NOT operator(~~):
    ---------------------------------------
    Basically bitwise NOT Operator will Change the sign and subtarct 1 .

    const int = ~~"15"
    console.log(int); // Result: 15
    console.log(typeof int); Result: "number"
        
    So Here ~"15" --> -("15")-1 = -16 --> ~(-16) --> -(-16)-1 --> 15

6. Convert Float to Integer

    Using bitwise OR(|) Operator:
    -------------------------------
    If you want to convert a float to an integer, you can use Math.floor() ,
    Math.ceil() or Math.round() . But there is also a faster way to truncate a
    float to an integer using |, the bitwise OR operator.

    console.log(23.9 | 0);  // Result: 23
    console.log(-23.9 | 0); // Result: -23

    The behaviour of | varies depending on whether you’re dealing with positive or negative numbers,
    so it’s best only to use this shortcut if you’re sure.

    If n is positive, n | 0 effectively rounds down. If n is negative,
    it effectively rounds up. To put it more accurately, this operation removes whatever
    comes after the decimal point, truncating a float to an integer.

    Using Double bitwise NOT operator(~~):
    ----------------------------------------
    You can get the same rounding effect by using ~~, as above, and in fact any
    bitwise operator would force a float to an integer. The reasons these particular
    operations work is that — once forced to an integer — the value is left unchanged.

    console.log(~~23.9);  // Result: 23

7. Remove Final Digits

    Using bitwise OR(|) Operator:
    -------------------------------
    The bitwise OR operator can also be used to remove any amount of digits from the end
    of an integer. This means we don’t have to use code like this to convert between types.

    console.log(1553 / 10   | 0)  // Result: 155
    console.log(1553 / 100  | 0)  // Result: 15
    console.log(1553 / 1000 | 0)  // Result: 1


