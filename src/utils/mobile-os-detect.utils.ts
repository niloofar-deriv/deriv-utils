import { huaweiDevicesRegex } from "../constants/mobile-devices.constants";

/**
 * This file contains utility functions and types for detecting the mobile operating system.
 * It uses the User-Agent string and the User-Agent Client Hints API to determine the OS.
 */

type ExtendedWindow = Window & {
    // MSStream is specific to IE and Edge browsers
    MSStream?: {
        msClose: () => void;
        msDetachStream: () => void;
        readonly type: string;
    };
    // opera is specific to Opera browser
    opera?: string;
};

type ExtendedNavigator = Navigator & {
    // userAgentData is part of the User-Agent Client Hints API
    userAgentData?: NavigatorUAData;
};

/**
 * Type representing the User-Agent Client Hints API.
 */
type NavigatorUAData = {
    brands: { brand: string; version: string }[];
    getHighEntropyValues(hints: string[]): Promise<HighEntropyValues>;
    mobile: boolean;
};

/**
 * Type representing the high entropy values that can be obtained from the User-Agent Client Hints API.
 */
type HighEntropyValues = {
    model?: string;
    platform?: string;
    platformVersion?: string;
    uaFullVersion?: string;
};

/**
 * It checks if the input string contains any of the valid Huawei device codes.
 *
 * @param {string} inputString - The string to check for Huawei device codes.
 * @returns {boolean} Returns true if the input string contains a valid Huawei device code, false otherwise.
 */
const validateHuaweiCodes = (inputString: string) => {
    return huaweiDevicesRegex.test(inputString);
};

/**
 * It uses the User-Agent string and the User-Agent Client Hints API to detects the mobile operating system asynchronously.
 *
 * @returns {Promise<string>} Returns a promise that resolves to the name of the detected mobile OS.
 */
export const mobileOSDetectAsync = async () => {
    const extendedWindow = window as ExtendedWindow;
    const extendedNavigator = navigator as ExtendedNavigator;

    const userAgent = extendedNavigator.userAgent ?? extendedWindow.opera ?? "";

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        // Check if navigator.userAgentData is available for modern browsers
        // userAgent only returns a string, while userAgentData returns an object with more detailed information
        if (extendedNavigator.userAgentData) {
            const ua = await extendedNavigator.userAgentData.getHighEntropyValues(["model"]);
            if (validateHuaweiCodes(ua?.model || "")) {
                return "huawei";
            }
        } else if (validateHuaweiCodes(userAgent) || /huawei/i.test(userAgent)) {
            return "huawei";
        }
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !extendedWindow.MSStream) {
        return "iOS";
    }

    return "unknown";
};
