/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
    let myName;
    let myAge;
    let string;
    //console.log(myAge);
    let para = document.querySelector('body p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
myName = 'Shivi Dhaka';
myAge = 30;
//console.log(myAge);

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
             myName = 'SD';
             myAge = 31;
             string = myName + ',' + myAge;
             para.textContent=string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse =30;
        para.textContent = numCourse;
        console.log(typeof(numCourse));

		// Strings (use '' or "")
        let stringCourse ="ClientSideJS";
        console.log(stringCourse);

		// Booleans
        let imalive = true;
        let compare = 6<3;
        console.log(compare);
        console.log('The result of the comaprison is: ' + compare);

		// Arrays
        let myArray =['Sarah','Steve','Melissa'];
        console.log(myArray[1]);

        let myNumbers = [20, 30, 50];
        console.log(myNumbers[2]);
		
		// Objects
        let dog ={dogName : 'Simba', breed:'StaffyMix',color:'brown'};
        console.log(dog.breed);

		// STEP 5: Typing (JavaScript is a loosely-typed language)

        var myNumber = '500';
        console.log(typeof(myNumber));

        //Type conversion

        let y = "5" + 2;
        let z = "5" - 2
        console.log(z);

        let b;
        b= 10;

        const c = 20;
         //c = 21;

         console.log(c);


    