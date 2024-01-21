//LEXICAL SCOPE:----> wo function jis scope me define h 
// agar mujhe koi variable use krna  h or wo un function me nh define to lexical scope me dekhega k wo function jis block/ scope me define h wahan wo variable define h ya nh

const myVar = 123;
const nested = () => {
    // const myVar = "value1";
    const myFunc1 = () => {
        //agr me myVar yahan define kr k call krnga to yehi wala use hoga lakin agr myVar yahan define nh kia mene to js lexical scope me dhoondhegi  or wo wala myVar use kregi
        // const myVar = "valueUpdated!";
        console.log("from myFunc !!", myVar);
    }

    console.log("inside nested !!", myVar);
    myFunc1();
    
}

nested();

// agar me myVar global scope define krta to js pehle us function k lixecal me check krti agr nh milta to nested k lexical me and so on 

