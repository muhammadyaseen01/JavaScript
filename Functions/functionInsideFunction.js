

const nested = () => {

    const myFunc1 = () => {
        console.log("from myFunc !!");
    }
    const myFunc2 = (num1, num2) => num1 + num2;

    console.log("inside nested !!");
    myFunc1();
    console.log(myFunc2(2, 4));
}

nested();
