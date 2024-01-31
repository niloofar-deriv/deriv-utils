/**
 * Sorts the object key alphabetically.
 * @param object Key value pair object
 * @returns Same object with sorted key
 */
export const sortObjectKeys = <T extends Record<string, any>>(object: T) => {
    return Object.keys(object)
        .sort()
        .reduce((result, key) => {
            result[key as keyof T] = object[key];
            return result;
        }, {} as T);
};
