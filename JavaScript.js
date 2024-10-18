// JAVASCRIPT BEHIND SCENES
/*
JAVASCRIPT IS

    High-level: we do not have to manage resourses at all, this languages have abstractions, 
    and because of it everything happens automaticly. Easier to learn but not as fast as low-lewel code.

    Garbage-collected: cleaning the memory, so we dont have to.

    just-in-time compiled: 

    Multi-paradigm: Paradigm: An approach and mindset of structuring code, which will direct your coding 
    style And technique
    3 Popular paradigm: 1)Procedural programming: Organazing code with very linear way and with some 
        functions in between
                        2) Object-orinted programming (OOP)
                        3) Functional Programming (FP)
    Paradigm has 2 types: Imperative and Declarative


    Prototype-based, object-oriented:


    First-class functions: functions are simply treated as variable. we can pass them into other functions,
    and return them from functions.

    Dynamic:  Data type of variable is automatically changed, so it is dynamically-typed language

    Single-threaded: it can only do one thing at a time

    Non-blocking event loop: takes long running taks, executes them in the background and puts them back 
    in the main thread once they are finished.



JS ENGINE
    Program that executes Js code. Example v8 engine;

    js engine contains: CALL STACK and HEAP
        Call Stack- where our code ie executed(Place where execution context get stacked on top of 
        each other, to keep track of where we are in the execution)
        Heap: Where objects are stored


    COMPILATION VS INTERPTRETATION

    Compilation: Entire code is converted into machine code at once, and written to a binary file that can
    be executed by a computer. 
    INTERPRETATION: Interpreten runs through the source code and executes it line by line.
    CODE IS READY AND EXECUTED AT THE SAME TIME.
    JUST_IN_TIME COMPILATION: Entire code is converted into machin code at once, then executed immediately.
    JS is JIT language: PARSING --> COMPILATION(Just in time compilation) --> EXECUTION --> OPTIMIZATION(BACK TO COMPILATION)
    ALSO OPTIMIZATION HAPPENS DURING EXECUTION 

    JS RUNTIME IN THE BROWSER: It is JS engine, Web API-s(Functionalities provided to the engine, accessible
        on window object), Callback QUEUE(Event loop puts callback from callback queue in call stack,
            That is essential for non-blocking concurrency model)
    Different JS runtimes exists!

EXECUTION CONTEXT
    there are 3 steps
        1)Creation of global execution context(for top-level code(Not inside a function))
        2) Execution of top-level code(inside global EC(Exactly one global exectuion context))
        3)Execution of functions and waiting for callbacks(For each function call, a new execution 
          context is created)



Scoping
    Scoping: How our program's variable are organized and accessed.
    Lexical scoping: Scoping is controlled by placement of functions and blocks in the code.
        For example(functions that are written in functions have access to parent function variables)
    Scope: space or enviroment in which a certain variable is declared(3scopes: Global, function, block SCOPE)
    Scope of a variable: Region of our code where a certain variable can be accessed.
    Global Scope: accessible everywhereZ(Should be dicleared outside of any function or block)
    Function Scope: Variable are accessible only inside function, not outside(Also called Local scope)
    Block Scope(ES6): Variables are accessible only inside block(Aplies to let and const variables)
    Functions are also block scoped(only in strick mode)
    LET AND CONST ARE BLOCK SCOPED
    VAR IS FUNCTION SCOPED
    Scope Chain works only upworks
    Scope chain has nothing to do with order in which function were called, its about order in which functions
    are written
    When a variable is not in the current scope, the engine looks up in the scope chain until it finds the
    variable it is looking for. this is called variable lookup
    Scope chain is a one-way street: a scope will never, eve have acess to the variabvles of an inner scope;

    Functions are block scoped in ES6

    DIFFERENCE BETWEEN var and let + const= declared by war is accessed in window object(global object), let and const is not accessed there.


EXECUTION CONTEXT 
    It contains 3 things: Variable environment, Scope chain, This keyword.

HOISTING
    Hoisting: makes some type of variables accessible/usable in the code before they are actually declared
    "Variables lifted to the top of their scope"
    Behind scenes Hoisting does: Beofre execution, code is scanned for variable declarations, and for each 
    variable, a new properrty is created in the variable environment object.

    Function declartions: Hoisted(YES) Initial Value(actual function)  SCOPE(block(strick-mode) else function scope)
    Var variables:   Hoisted(YES) Initial Value(undefined)  SCOPE(function scope)
    let && const variables:   Hoisted(Technically, yes. but not in practice) Initial Value(uninitialized, TDZ)  SCOPE(block)
    Function expressions and arrows:   Hoisted(if created by var(HOisted and undefined if(created with const or let, its not usable 
    before its declared in the code)))

    WHY TDZ?
        makes it easier to avoid and catch errors: accessing variables beofre declaration is bad practice and should be avoided.
        Makes const variables actually work. for example to be undefined and then reassign.
    Why Hoisting?
        Using functions before actual declaration;


THIS
    This keyword/variable: SPecial variable that is created for every execution context(every fynction).
    Takes the value of (points to) the "owner" of the function in which the this keyword is used.

    this is NOT static. it depends on how the function is called, and its value is only assigned when the function is actually called.

    Method: this = object that is calling the method
    Simple function call: this = underfined in strict mode! otherwise: window (in the browser)
    Arrow functions dont get own this = this of surrounding function (lexical this)
    Event listener this = <DOM element that the handler is attached to>
    new, call, apply bind: LATER

    This does NOT point to the function itself, and also NOT the its variable environment!

Primitives vs Objects

        Primitives -->(Number, String, Boolean, Undefined, Null, Symbol, BigInt) Primitives are PRIMITIVE TYPES. WILL BE STORED IN Call stack
        let age = 30;
        let oldAge = age;
        age = 31
        console.log(age) // 31
        console.log(oldAge) // 30

        Objects -->(Object literal, Arrays, Functions, Many more...) Objects are REFERENCE TYPES. Will be stored in the heap and stack just keeps reference to the memory position at which the object is stored in the heap
        const me = {
            name: 'Jonas',
            age: 30,
        };
        const friend = me;
        friend.age = 27;
        console.log(friend) //27
        console.log(me) //27
    

        if we want to create completely new object and copy another object in it we can use object.assign({}, me)
        Object.assign only works in the first-level(it creates shallow coppy)


SPREAD OPERATOR
    spread operator  takes all elemens from array and does not create new variables.
    we can use spread operator on iterables: Arrays, strings, maps, sets. NOT objects
    Multiple values seperated by coma, are usually only expected when we pass arguments in functions or we build new array.
    Unpack Array!

Rest Paattern
    To collect multiple elements and convert them into array.
    Pack elements into Array!
    Rest element mush be last!


    SPREAD IS RIGHT SIDE OF =
        const arr = [1, 2, ...[3, 4]];
    REST IS LEFT SIDE OF =
    const [a, b, ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others) // 1 2 [3, 4, 5];

    IN OBJECTS(REST)!
    const restaurant = {
    starterMenu: ['asd', 'ddd', 'asdd', 'zxc'],
    mainMenu: ['pizza', 'pasta', 'rissoto']
  
}



    const [pizza, , rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]


    console.log(...restaurant.starterMenu) //asd ddd asdd zxc
    console.log(pizza, rissoto, otherFood) // pizza rissoto [ 'asd', 'ddd', 'asdd', 'zxc' ]


    IN FUNCTIONS(SRPEAD)!
    const add = function(...numbers){
        console.log(numbers) // [2, 3]  [5, 3, 7, 2], [8, 2, 5, 3, 2, 1, 4]
    }

    add(2, 3)
    add(5, 3, 7, 2)
    add(8, 2, 5, 3, 2, 1, 4)


    WITH REST OPERATOR WE COMPRESS(Pack values into array in functions), WITH SPREAD OPERATOR WE  EXTEND(Unpack values in functions)!!!!


    THe Nullish  Coalescing Operator
    restaurant.numGuests = 0;
    const guestss =  restaurant.numguests || 10;
    console.log(guests); // 10 

    // Nullish values are: null and undefined(NOT 0 or '')
    const guestCorrect = restaurant.numGuests ?? 10;
    console.log(guestCorrect); // 0



    // FOR OF LOOP

    const menu = ['asd', 'zxc', 'qwe]

    for ( const item of menu) console.log(item); //asd, zxc, qwe
    for (const item of menu.entries()) {
        console.log(`${item[0] + 1}: ${item[1]}`) // 1: asd 2: zxc 3:qwe
    }
    for (const [i, el] of menu.entries()) {
        console.log(`${i + 1}: ${el}`) // 1: asd 2: zxc 3:qwe
    }


    // SETS
        They have Unique values

    // MAP
    const rest = new Map()
    rest.set('name', 'Classico Italiano');
    rest.set(1, 'Firenze, Italy')
    reset.set(2, 'Lisbon, Portugal'))

    to get data from map we use get();


    Funtions Accepting Callback Functions
        const oneWord = function (str){
            return str.replace(/ /g, '').toLowerCase();
        };

        const upperFirstWord = function (str) {
            const [first, ...others] = str.split(' ');
            return [first.toUpperCase(), ...others].join(' ');
        };


        const transformer = function (str, fn) {
            console.log(`Original string: ${str}`);
            console.log(`Transformed string: ${fn(str)}`);
  
            console.log(`Transformed by: ${fn.name}`);
};


    transformer('Javascript is the best!', upperFirstWord)
    transformer('Javascript is the best!', oneWord)


    // RETURNING FUNCTIONS
        const greet = function (greeting){
            return function(name){
            console.log(`${greeting} ${name}`)
            }
        }   
        const greetHey= greet('Hey');
        greetHey('Jonas')

    //WITH ARROW FUNCTION
        const greetArrow = (greeting) => {
        return (name) => {
        console.log(`${greeting} ${name}`)
        }
    }
    // SHORTER ARROW FUNCTION
    const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`)

    const greetArrowHey = greetArrow('Hey');
    greetArrowHey('Jonas')



    // CALL AND APPLY METHOD
       const lufthansa = {
        airline: 'Lufthansa'.
        iataCode: 'LH',
        bookings: [],
        // book: function(){}
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum});
            this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
        }, 
       };


       lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
       console.log(lufthansa) //


       const eurowings = {
        name: "Eurowings',
        iataCode: 'EW',
        booking: [],
       };


       //TO REUSE BOOK FUNCTIONS HERE IN EUROWINGS
       const book = lufthansa.book;
       To make this keyword works, we must use call apply or bind method

       //CALL METHOD
       book.call(eurowings(points this to this object), 23, 'Sarah Williams')

       //APPLY METHOD
       first argument is object again but second must be an array
       const flightData = [583, 'George Cooper']
       book.apply(eurowings, flightData)

       HOWEVER WE CAN USE ES6 HERE IN CALL METHOD(In array sitoation as well) BECAUSE APPLY IS NOT USED WIDELY ANYMORE
       book.call(eurowings, ...flightData)

       // BIND METHOD
        just like the call method bind also allows us to manually set THIS keyword on any function call
        DIFFERENCE: bind does not call function immediately, instead it returns new function where THIS
        keyword is already set. so its set to whatever value we pass into function


        const bookEW = book.bind(eurowings);
        bookEW9(23, 'Steven Williams')


        // WITH EVENT LISTENERS
        lufthansa.planes = 300
        luthansa.buyPlane = function () {
            console.log(this);

            this.planes++;
            console.log(this.planes);
        };

        document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane(Handler Function));

        OUTPUT: NAN, because in event handler function this keyword always points to the element onwhich that 
        handler is atthached to


        TO make this work, we must use bind method because, we need to pass a function here and not to call it
         document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


         // PARTIAL APPLICATION(it means we can preset paramaters.WE USE BIND FOR THIS)
         const addTax = (rate, value) => value + value * rate;
         console.log(addTax(0.1, 200)); //220

         const addVat = addTax.bind(null, 0.23);
         console.log(addVat(100)) // 123
         console.log(addVat(23)) // 28.29



        // CLOSURES
            A function has access to the variable environment(VE) of the execution context in which it was created
            Closure: VE attached to the function, exactly as it was at the time and place the function was created

            A closure is the closed-over variable environment of the execution context in which a function was created
            even after that execution context is gone.

            Another explanation: A closure gives a function acccess to all the variables of its parent function,
            even after that parent function has returned. The function keeps a reference to its outer scope,
            which preserves the scope chain trhoughout time.

            Another one: A closure makes sure that a function doesen't loose connection to variables that existed 
            at the function's birth place;



        // SECTION ABOUT ARRAY(11)
        I have studied a lot of array method without notes, but we can recheck videos here if i forget something

        However this ES 2019 method is superb

        //FLAT
        const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
        console.log(arr.flat())/[1, 2, 3, 4, 5, 6, 7, 8] nested arrays inside arrays become1 array(GOING ONLY 1 LEVEL DEEP)
        const arrDeep=[[[1, 2], 3], [4, [5,6]], 7, 8] //wont be 1 array it goes only 1 level deep

        WE CAN FIX SECOND EXAMPLE WITH flat(ARGUMENT(1, 2 or etc...))


        console.log(arrDeep.flat(2))

        //FLATMAP
        if we want to combine map and flat method and dont do 2 functions and do it with a we must use flatMap()

        in the end it flats when using flatMap the reuslt and it goes only 1 level deep


        // SORT
        basicaly it sort an array in asc way, and manipulates the original one
        but with negative numbers in order it to work we should use it like this

        const numbers = [100, -200, -400, 400, 120, -300]
        console.log(numbers.sort) // [ -200, -300, -400, 100, 120, 400 ]

        to fix this we should use it like it

        //return < 0 A, B
        // return > 0, B, A
        movements.sort((a, b) => {
             if( a > b) return 1;
            if( a < b) return -1;
        });

        const number = [2, 1, 6, 4, 7, 9]


        console.log(number.sort((a, b) => a - b)) // [1, 2, 4, 6, 7, 9]
        If the result is negative, a comes before b.
        If the result is positive, b comes before a.
        If the result is zero, the order remains unchanged.





    Asynchronous JS
        Asynchronous code is executed after a task that runs in the background finishes;
        Asynchronous code is non-blocking
        execution doesn't wait for an asyncrhonous taks to finish its work;
        callback functions alone do not make code asyncrhonous!

        examples of async code: Geolocation API, AJAX calls, setTImeout

        AJAX ==> Asynchronous JavaScript AND XML: Allows us to communicate with remote web servers
        in an asyncrhonous way. With AJAX calls, we can request data from web servers dynamically.
        so without reloading page, that we can use that data in application dynamically.

        AJAX ==> x stand for XMP is data format which was widely used to transmit data from web,
        this days no one uses XMP anymore, AJAX is old name that got very popular, so it is still used
        today. even though we dont use xml anymore.
        most apis uses JSON data format.


        const request = new XMLHttpRequest();
        request.open('GET', 'asdasdasd'); //to open request
        request.send(); // send off requst to this URL
        to get result we can not do something like this data = require.send(); 

        request.addEventListener('load', function(){ // using this eventListener we are waiting for data and when it arrives we are calling function
            console.log(this.responseText) //(this is request here )
                                           //responseText will arrive once we get it.

            const data = JSON.parse(this.responseText);
            console.log(data


                [data] = JSON.parse(this.responseText); is same as data =JSON.parse(this.responseText)[0]
            )
        })


        PROMISE
          promise: an object that is used as a placeholder for the future result of an asynchronous operation
          promise: A container for an asynchronously delivered value.
          promise: a container for a future vlaue.

        BENEFITS: WE no longer need to rely on events and callbacks passed into asynchronous functions
        to handle asynchronous results; 

        instead of nesting callbacks, we chain promises for a sequence of asynchrronous operations:
        ESCAPING CALLBACK HELL 

        3 stages: 
        1)PENDING(Before the future value is available)
        2) SETTLED(asynchronous taks has finished) FULLFILLED OR REJECTED
        

        WE are able handle there different states in our code

        BUILD PROMISE ----> CONSUME PROMISE(When we already have a promise E.g promise returned from FETCH API)


        ASYNCHRONOUS BEHIND SCENES
            JS RUNTIME IN THE BROWSER ==> container which includees all the pieces necessary to 
            execute JS code
            JS ENGINE is heart of the runtime
            HEAP ==> where object are stored in memory
            call stack where code is actually executed ==> only one thread of execution. No Multitasking

            WEB APIs- APIS provided to the engine(DOM TIMERS FETCH API GEOLOCATION API AND ETC...)
            CALL BACK QUEUE - ready to be execute callback functions(coming from events)

            whenever call stack is empty, event loop takes callbacks from callback queue, and puts in call stack
            to be executed.

            EVENT LOOP is the essential piece that makes asynchronous behavior work in js.


        WAIT DOES NOT HAVE ANY RESLOLVED VALEU return wait(2) for example./

        promise.all we must use it if we want to do a lot of promises at once and they dont depent on each other
        promise.race([]) here promises will race!

        Promise.allSettled simpy returns all the resulst of all promises as an array, but promise.all will
        reject if there was an error

        Promise.any was introduced in es2021 take array of multiple promices and will return first fulfilled promise
        rejected promises are ignored!

        
            */
