/**
 * Sorts the object key alphabetically.
 * @param object Key value pair object
 * @returns Same object with sorted key
 */
export const sortObjectByKeys = <T extends Record<string, any>>(object: T) => {
    return Object.keys(object)
        .sort()
        .reduce((result, key) => {
            result[key as keyof T] = object[key];
            return result;
        }, {} as T);
};

/**
 * Computes the SHA-256 hash of a JavaScript object.
 * @param {T extends object} object - The object to be hashed.
 * @returns {Promise<string>} A Promise that resolves to the SHA-256 hash of the input object as a hexadecimal string.
 * @throws {Error} Throws an error if the hashing operation fails or if the input is not a valid object.
 */
export const hashObject = async <T extends object>(object: T) => {
    const messageBuffer = new TextEncoder().encode(JSON.stringify(sortObjectByKeys(object)));
    const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedString = hashArray.map((b) => ("00" + b.toString(16)).slice(-2)).join("");
    return hashedString;
};
