const mobile = {
    iphone:{
        v14:{
            ram:'64gb',
            rom:'2gb',
            price:100000
        },
        v12pro :{
            ram:'256gb',
            rom:'2gb',
            price:150000
        },
        v11pro:{
            ram:'64gb',
            rom:'3gb',
            price:170000
        }
    },
    infinix:{
        hot11:{
            ram:'128gb',
            rom:'3gb',
            price:155000
        },
        hot9:{
            ram:'256gb',
            rom:'4gb',
            price:175000
        },
        hot10:{
            ram:'520gb',
            rom:'6gb',
            price:190000
        },
    },
    realme:{
        realme9i:{
            ram:'128gb',
            rom:'6gb',
            price:20000
        },
        c35:{
        ram:'256gb',
        rom:'5gb',
        price:600000
        },
        c11:{
        ram:'64gb',
        rom:'3gb',
        price:900000
        },
    }
}
// ===========================Nested Object (spread Operator)===================

const newObj = {...mobile.iphone.v14};
console.log(newObj);

const newObj1 = {...mobile.infinix.hot9};
console.log(newObj1);

const newObj2 = {...mobile.realme.c11};
console.log(newObj2);

// ==============================Nested Array (spread Operator)===================

const arr = {
    key1:[1,2,3,4],
    key2:['value1','value2','value3','value4'],
    key3:['key1','key2','key3','key4'],
};
const newarr = [...arr.key1];
console.log(newarr);

const newarr1 = [...arr.key2];
console.log(newarr1);

const newarr2 = [...arr.key3];
console.log(newarr2);


