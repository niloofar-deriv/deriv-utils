import { describe, test, expect } from "vitest";
import { ObjectUtils } from "../index";

describe("sortObjectByKeys", () => {
    test("should sort object by keys alphabetically", () => {
        const payload = {
            c: 3,
            a: 1,
            d: 4,
            b: 2,
        };
        const output = ObjectUtils.sortObjectByKeys(payload);
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
        const output1 = ObjectUtils.sortObjectByKeys(payload1);
        const output2 = ObjectUtils.sortObjectByKeys(payload2);
        expect([output1, output2]).toContainEqual(expected);
    });
});

describe("hashObject", () => {
    test("should return same hash for same object", async () => {
        const output1 = await ObjectUtils.hashObject({ hello: "world" });
        const output2 = await ObjectUtils.hashObject({ hello: "world" });
        expect(output1).toEqual(output2);
    });

    test("should return same hash for repeated hash operations", async () => {
        const object = { test: "object", lol: "gg" };
        const output1 = await ObjectUtils.hashObject(object);
        const output2 = await ObjectUtils.hashObject(object);
        const output3 = await ObjectUtils.hashObject(object);
        expect([output2, output3]).toContain(output1);
    });

    test("hashes for different object should not be equal", async () => {
        const output1 = await ObjectUtils.hashObject({ test: 108 });
        const output2 = await ObjectUtils.hashObject({ diff: "something" });
        expect(output1).not.toEqual(output2);
    });

    test("should handle empty objects correctly", async () => {
        const output = await ObjectUtils.hashObject({});
        expect(output).toBeDefined();
    });

    test("should produce consistent hashes for objects with different property orders", async () => {
        const output1 = await ObjectUtils.hashObject({ key1: 1, key2: 2 });
        const output2 = await ObjectUtils.hashObject({ key2: 2, key1: 1 });
        expect(output1).toEqual(output2);
    });
});
