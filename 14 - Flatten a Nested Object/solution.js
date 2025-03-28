function flattenObject(obj) {
    function helper(obj, path = '', result = {}) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let newKey = path ? `${path}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    helper(obj[key], newKey, result);
                } else {
                    result[newKey] = obj[key];
                }
            }
        }
        return result;
    }
    return helper(obj);
}



// Test Cases
console.log(flattenObject({ a: { b: { c: 1 }, d: 2 } }));