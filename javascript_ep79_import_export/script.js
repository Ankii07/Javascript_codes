//terminal mai nhi dikhega devtool ke console mai dikhega
import { usersData , myNames} from "./userData.js";
console.log(usersData)
console.log(myNames);
//jo export default huae rhte hai unhe import bina {}  curly braces ke karna hota hai
import productsData from "./productData.js"
console.log(productsData)
//is trah se sara khuch import kiya ja skta hai

import * as something from './productData.js'
console.log(something.myNames);

console.log(something.default());

//phle javascript import kiye huae file mai jata hai wha run krta hai phir apna program run krta hai