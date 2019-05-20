function is_usZipCode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

let zipcode1 ="03201 - 2150";
console.log(is_usZipCode(zipcode1));
let zipcode2 ="7892";
console.log(is_usZipCode(zipcode2));