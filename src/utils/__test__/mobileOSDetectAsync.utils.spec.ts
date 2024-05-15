import { mobileOSDetectAsync, getOSNameWithUAParser } from "../mobileOSDetectAsync.utils";
import UAParser from "ua-parser-js";

describe("mobileOSDetectAsync", () => {
    test('should return "Windows Phone" for Windows Phone user agent', async () => {
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("windows phone");
        expect(await mobileOSDetectAsync()).toBe("Windows Phone");
    });

    test('should return "Android" for Android user agent', async () => {
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("android");
        expect(await mobileOSDetectAsync()).toBe("Android");
    });

    test('should return "iOS" for iOS user agent', async () => {
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("iPhone");
        jest.spyOn(window, "MSStream", "get").mockReturnValue({
            msClose: () => {},
            msDetachStream: () => {},
            type: "someType",
        });
        expect(await mobileOSDetectAsync()).toBe("iOS");
    });

    test('should return "iOS" for iOS user agent', async () => {
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("iPhone");
        jest.spyOn(window, "MSStream", "get").mockReturnValue({
            msClose: () => {},
            msDetachStream: () => {},
            type: "someType",
        });
        expect(await mobileOSDetectAsync()).toBe("iOS");
    });

    test('should return "unknown" for unknown user agent', async () => {
        jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("unknown");
        expect(await mobileOSDetectAsync()).toBe("unknown");
    });

    test("should return the OS name", () => {
        jest.spyOn(UAParser, "OS", "get").mockReturnValue({ NAME: "name", VERSION: "version" });
        expect(getOSNameWithUAParser()).toBe("name");
    });
});
