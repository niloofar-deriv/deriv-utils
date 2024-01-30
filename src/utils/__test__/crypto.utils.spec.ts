import { describe, test, expect } from "vitest";
import { hashObject } from "..";

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

    test("hash for different object should be not equal", async () => {
        const output1 = await hashObject({ test: 420 });
        const output2 = await hashObject({ test: 69 });
        expect(output1).not.toEqual(output2);
    });
});
