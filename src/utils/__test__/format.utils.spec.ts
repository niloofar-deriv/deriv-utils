import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { FormatUtils } from "..";
import { getAdjustedDate, getFormattedDateString, getFormattedTimeString, parseCryptoLongcode } from "../format.utils";

describe("FormatUtils.formatMoney", () => {
    test("should format money properly if decimalPlaces is specified", () => {
        const output = FormatUtils.formatMoney(3.14256791, { decimalPlaces: 4 });
        expect(output).toBe("3.1426");
    });

    test("should format money properly if currency is specified", () => {
        const output = FormatUtils.formatMoney(6.91, { currency: "BTC" });
        expect(output).toBe("6.91000000");
    });

    test("should prioritise decimalPlaces over currency", () => {
        const output = FormatUtils.formatMoney(6.91, { currency: "BTC", decimalPlaces: 2 });
        expect(output).toBe("6.91");
    });

    test("should format correctly to the specified locale", () => {
        const output = FormatUtils.formatMoney(61231.914, { locale: "de", decimalPlaces: 2 });
        expect(output).toBe("61.231,91");
    });

    test("should default to 2 decimal places if no options are not specified", () => {
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

describe("FormatUtils.getFormattedDateString", () => {
    test("converts current date to formatted string in default format", () => {
        const currentDate = new Date("2023-05-15T12:00:00Z");
        const formattedDate = getFormattedDateString(currentDate);
        expect(formattedDate).toBe("2023-05-15");
    });

    test('formats date string in "DD-MM-YYYY" format', () => {
        const dateString = "2023-05-15T12:00:00Z";
        const formattedDate = getFormattedDateString(dateString, { format: "DD-MM-YYYY" });
        expect(formattedDate).toBe("15-05-2023");
    });

    test('formats date string in "DD MMM YYYY" format', () => {
        const dateString = "2023-05-15T12:00:00Z";
        const formattedDate = getFormattedDateString(dateString, { format: "DD MMM YYYY" });
        expect(formattedDate).toBe("15 May 2023");
    });

    test('formats date string in "MMM DD YYYY" format', () => {
        const dateString = "2023-05-15T12:00:00Z";
        const formattedDate = getFormattedDateString(dateString, { format: "MMM DD YYYY" });
        expect(formattedDate).toBe("May 15 2023");
    });

    test("handles Unix timestamp", () => {
        const unixTimestamp = 1684152000; // 2023-05-15T12:00:00Z
        const formattedDate = getFormattedDateString(unixTimestamp, { format: "YYYY-MM-DD", unix: true });
        expect(formattedDate).toBe("2023-05-15");
    });

    test("throws error for invalid input", () => {
        expect(() => getFormattedDateString({} as Date)).toThrow("Invalid date input");
    });
});

beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2024-09-01T12:30:45Z"));
});

afterEach(() => {
    vi.useRealTimers();
});

describe("FormatUtils.getFormattedTimeString", () => {
    test("should convert current date to formatted time string", () => {
        const currentDate = new Date("2024-09-01T12:30:45Z");
        const formattedTime = getFormattedTimeString(currentDate);
        expect(formattedTime).toBe("12:30:45 GMT");
    });

    test("should handle Unix timestamp", () => {
        const date = new Date("2024-09-01T12:30:45Z");
        const unixTimestamp = Math.floor(date.getTime() / 1000);

        const formattedTime = getFormattedTimeString(unixTimestamp, true);
        expect(formattedTime).toBe("12:30:45 GMT");
    });

    test("should throw error for invalid input", () => {
        expect(() => getFormattedTimeString({} as Date)).toThrow("Invalid date input");
    });
});

describe("FormatUtils.getAdjustedDate", () => {
    test("should add date by days", () => {
        const adjustedDate = getAdjustedDate(5, "days");
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() + 5);
        expect(adjustedDate.toDateString()).toBe(expectedDate.toDateString());
    });

    test("should subtract date by days", () => {
        const adjustedDate = getAdjustedDate(5, "days", "subtract");
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() - 5);
        expect(adjustedDate.toDateString()).toBe(expectedDate.toDateString());
    });

    test("should add date by years", () => {
        const adjustedDate = getAdjustedDate(2, "years");
        const expectedDate = new Date();
        expectedDate.setFullYear(expectedDate.getFullYear() + 2);
        expect(adjustedDate.toDateString()).toBe(expectedDate.toDateString());
    });

    test("should subtract date by years", () => {
        const adjustedDate = getAdjustedDate(2, "years", "subtract");
        const expectedDate = new Date();
        expectedDate.setFullYear(expectedDate.getFullYear() - 2);
        expect(adjustedDate.toDateString()).toBe(expectedDate.toDateString());
    });
});

describe("FormatUtils.parseCryptoLongcode", () => {
    test("should correctly parse a valid long code", () => {
        const longCode =
            "address: abc123def456ghi789jkl012mno345pqr678stu9, transaction: xyz123abc456def789ghi012jkl345mno678pqr901";
        const result = parseCryptoLongcode(longCode);

        expect(result).toEqual({
            addressHash: "abc123def456ghi789jkl012mno345pqr678stu9",
            blockchainHash: "xyz123abc456def789ghi012jkl345mno678pqr901",
            splitLongcode: [
                "address: abc123def456ghi789jkl012mno345pqr678stu9",
                "transaction: xyz123abc456def789ghi012jkl345mno678pqr901",
            ],
        });
    });

    test("should handle missing address hash gracefully", () => {
        const longCode = "address:, transaction: xyz123abc456def789ghi012jkl345mno678pqr901";
        const result = parseCryptoLongcode(longCode);

        expect(result).toEqual({
            addressHash: undefined,
            blockchainHash: "xyz123abc456def789ghi012jkl345mno678pqr901",
            splitLongcode: ["address:", "transaction: xyz123abc456def789ghi012jkl345mno678pqr901"],
        });
    });

    test("should handle missing blockchain hash gracefully", () => {
        const longCode = "address: abc123def456ghi789jkl012mno345pqr678stu9, transaction:";
        const result = parseCryptoLongcode(longCode);

        expect(result).toEqual({
            addressHash: "abc123def456ghi789jkl012mno345pqr678stu9",
            blockchainHash: undefined,
            splitLongcode: ["address: abc123def456ghi789jkl012mno345pqr678stu9", "transaction:"],
        });
    });

    test("should handle a completely malformed code gracefully", () => {
        const longCode = "malformed code without hashes";
        const result = parseCryptoLongcode(longCode);

        expect(result).toEqual({
            addressHash: undefined,
            blockchainHash: undefined,
            splitLongcode: ["malformed code without hashes"],
        });
    });

    test("should work when an empty string is passed", () => {
        const longCode = "";
        const result = parseCryptoLongcode(longCode);

        expect(result).toEqual({
            addressHash: undefined,
            blockchainHash: undefined,
            splitLongcode: [""],
        });
    });
});
