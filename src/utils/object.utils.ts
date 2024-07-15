/**
 * Sorts the object key alphabetically.
 * @param object Key value pair object
 * @returns Same object with sorted key
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

type TSources<T> = {
    [P in keyof T]?: TSources<T[P]>;
};

const replaceValue = <T>(value: T, newValue: T): T => {
    if (Array.isArray(value) && Array.isArray(newValue)) {
        return newValue.map((v, i) => replaceValue(value[i], v)) as unknown as T;
    } else if (typeof value === "object" && value !== null && typeof newValue === "object" && newValue !== null) {
        return merge(value, newValue);
    }
    return newValue;
};

/**
 * Function to merge two objects. An alternate to lodash.merge
 * @param target - The object to be merged into
 * @param sources - The objects to merge into target
 * @returns The merged object
 */
export const merge = <T>(target: T, ...sources: TSources<T>[]): T => {
    for (const source of sources) {
        for (const key in source) {
            if (source[key] === null || source[key] === undefined) {
                continue;
            }
            target[key as keyof T] = replaceValue(target[key as keyof T], source[key]!) as T[keyof T];
        }
    }
    return target;
};
