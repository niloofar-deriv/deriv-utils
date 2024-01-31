import { describe, test, expect } from "vitest";
import { sortObjectByKeys, hashObject } from "../object.utils";

describe("sortObjectByKeys", () => {
    test("should sort object by keys alphabetically", () => {
        const payload = {
            c: 3,
            a: 1,
            d: 4,
            b: 2,
        };
        const output = sortObjectByKeys(payload);
        expect(output).toEqual({
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        });
    });

    test("should produce consistent sorting", () => {
        const payload1 = {
            c: 3,
            a: 1,
            d: 4,
            b: 2,
        };
        const payload2 = {
            d: 4,
            a: 1,
            c: 3,
            b: 2,
        };
        const expected = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        };
        const output1 = sortObjectByKeys(payload1);
        const output2 = sortObjectByKeys(payload2);
        expect([output1, output2]).toContainEqual(expected);
    });
});

describe("hashObject", () => {
    test("should return same hash for same object", async () => {
        const output1 = await hashObject({ hello: "world" });
        const output2 = await hashObject({ hello: "world" });
        expect(output1).toEqual(output2);
    });

    test("should return same hash for repeated hash operations", async () => {
        const object = { test: "object", lol: "gg" };
        const output1 = await hashObject(object);
        const output2 = await hashObject(object);
        const output3 = await hashObject(object);
        expect([output2, output3]).toContain(output1);
    });

    test("hashes for different object should not be equal", async () => {
        const output1 = await hashObject({ test: 420 });
        const output2 = await hashObject({ test: 69 });
        expect(output1).not.toEqual(output2);
    });

    test("should handle empty objects correctly", async () => {
        const output = await hashObject({});
        expect(output).toBeDefined();
    });

    test("should produce consistent hashes for objects with different property orders", async () => {
        const output1 = await hashObject({ key1: 1, key2: 2 });
        const output2 = await hashObject({ key2: 2, key1: 1 });
        expect(output1).toEqual(output2);
    });
});
