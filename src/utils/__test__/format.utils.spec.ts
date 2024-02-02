import { describe, test, expect } from "vitest";
import { FormatUtils } from "..";

describe("FormatUtils.formatMoney", () => {
    test("should format money properly", () => {
        const output = FormatUtils.formatMoney(3.14256791, { decimalPlaces: 4 });
        expect(output).toBe("3.1426");
    });

    test("should default to 2 decimal places if decimalPlaces option is not specified", () => {
        const output = FormatUtils.formatMoney(3);
        expect(output).toBe("3.00");
    });

    test("should default to en-US locale if locale option is not specified", () => {
        const output = FormatUtils.formatMoney(1.3);
        expect(output).toBe("1.30");
    });

    test("should default return original number if invalid decimalPlaces is passed", () => {
        // @ts-expect-error negative test case
        const output = FormatUtils.formatMoney(420, { decimalPlaces: "NaNny" });
        expect(output).toBe("420");
    });

    test("should default return original number if invalid locale is passed", () => {
        const output = FormatUtils.formatMoney(3, { locale: "deez" });
        expect(output).toBe("3");
    });
});
