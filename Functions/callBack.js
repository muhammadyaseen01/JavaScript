//callback functions --> jo as a argument pass ho wo function callback func kehlata h

//agar parameter me kch pass nh krnge t undefined dega

function myFunc2(name){
    console.log("inside the func2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    // console.log(a);
    console.log("hello inside the func");
    callback("yaseen");

}

myFunc(myFunc2);

