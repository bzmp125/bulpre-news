//const cityBookingsAPIUrl = 'http://localhost:1144';
//const accBaseUrl = 'http://localhost/scripts/city_bookings/apis/accounts/user';

const cityBookingsAPIUrl = 'https://city-bookings-api.herokuapp.com';
const accBaseUrl = 'https://city-bookings-accounts.herokuapp.com/user';

const lsPrefix = "shoppie-";

function ls(key){
    return window.localStorage.getItem(lsPrefix+key);
}

function lsSet(key,val){
    window.localStorage.setItem(lsPrefix+key,JSON.stringify(val));
}
var isEqual = function (arr1, arr2) {
    console.log(this);
    // Get the value type
    var type = Object.prototype.toString.call(arr1);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(arr2)) return false;

    // More tests will go here...
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;
    // More tests will go here...

    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;
    // Compare properties
    if (type === '[object Array]') {
        for (var i = 0; i < valueLen; i++) {
            // Compare the item
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                // Compare the item
            }
        }
    }
    // If nothing failed, return true
    return true;

};
Array.prototype.isEqual; 