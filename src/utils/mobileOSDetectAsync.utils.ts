import UAParser from "ua-parser-js";
import { huaweiDevicesRegex, validCodes } from "../constants/mobile-devices.constants";

/**
 * This file contains utility functions and types for detecting the mobile operating system.
 * It uses the User-Agent string and the User-Agent Client Hints API to determine the OS.
 */

declare global {
    interface Window {
        MSStream?: {
            msClose: () => void;
            msDetachStream: () => void;
            readonly type: string;
        };
        opera?: string;
    }
    interface Navigator {
        userAgentData?: NavigatorUAData;
    }
}

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
function validateHuaweiCodes(inputString: string) {
    const matches = inputString.match(huaweiDevicesRegex);
    if (matches) {
        return matches.filter((code) => validCodes.has(code.toUpperCase())).length > 0;
    }
    return false;
}

/**
 * It uses the User-Agent string and the User-Agent Client Hints API to detects the mobile operating system asynchronously.
 *
 * @returns {Promise<string>} Returns a promise that resolves to the name of the detected mobile OS.
 */
export const mobileOSDetectAsync = async () => {
    const userAgent = navigator.userAgent ?? window.opera ?? "";
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        // Check if navigator.userAgentData is available for modern browsers
        if (navigator?.userAgentData) {
            const ua = await navigator.userAgentData.getHighEntropyValues(["model"]);
            if (validateHuaweiCodes(ua?.model || "")) {
                return "huawei";
            }
        } else if (validateHuaweiCodes(userAgent) || /huawei/i.test(userAgent)) {
            return "huawei";
        }
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
};

/**
 * This function uses the UAParser library to get the name of the operating system.
 *
 * @returns {string} Returns the name of the operating system.
 */
export const getOSNameWithUAParser = () => UAParser().os.name;
