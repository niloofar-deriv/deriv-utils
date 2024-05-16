import { describe, expect, test } from "vitest";
import { mobileOSDetectAsync } from "../mobile-os-detect.utils";

describe("mobileOSDetectAsync", () => {
    test('should return "Windows Phone" for Windows Phone user agent', async () => {
        Object.defineProperty(window.navigator, "userAgent", {
            value: "windows phone",
            configurable: true,
        });
        expect(await mobileOSDetectAsync()).toBe("Windows Phone");
    });

    test('should return "Android" for Android user agent', async () => {
        Object.defineProperty(window.navigator, "userAgent", {
            value: "android",
            configurable: true,
        });
        expect(await mobileOSDetectAsync()).toBe("Android");
    });

    test('should return "iOS" for iOS user agent', async () => {
        Object.defineProperty(window.navigator, "userAgent", {
            value: "iPhone",
            configurable: true,
        });
        expect(await mobileOSDetectAsync()).toBe("iOS");
    });

    test('should return "unknown" for unknown user agent', async () => {
        Object.defineProperty(window.navigator, "userAgent", {
            value: "unknown",
            configurable: true,
        });
        expect(await mobileOSDetectAsync()).toBe("unknown");
    });
});
