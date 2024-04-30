import { describe, expect, test } from "vitest";
import { getBrandWebsiteName, getLegalEntityName, getPlatformName } from "../brand.utils";

describe("BrandUtils.getLegalEntityName", () => {
    test('getLegalEntityName should return "Deriv (FX) Ltd" for landing_company "fx"', () => {
        expect(getLegalEntityName("fx")).toBe("Deriv (FX) Ltd");
    });

    test('getLegalEntityName should return "Deriv Investments (Europe) Limited" for landing_company "maltainvest"', () => {
        expect(getLegalEntityName("maltainvest")).toBe("Deriv Investments (Europe) Limited");
    });

    test('getLegalEntityName should return "Deriv (SVG) LLC" for landing_company "svg"', () => {
        expect(getLegalEntityName("svg")).toBe("Deriv (SVG) LLC");
    });

    test('getLegalEntityName should return "Deriv (V) Ltd" for landing_company "v"', () => {
        expect(getLegalEntityName("v")).toBe("Deriv (V) Ltd");
    });

    test("getLegalEntityName should return undefined for invalid landing_company", () => {
        expect(getLegalEntityName("invalid")).toBeUndefined();
    });
});

describe("BrandUtils.getBrandWebsiteName", () => {
    // Test cases
    test("getBrandWebsiteName should return the configured domain name", () => {
        expect(getBrandWebsiteName()).not.toBe("mydomain.com");
    });
    test("getBrandWebsiteName should return the configured domain name", () => {
        expect(getBrandWebsiteName()).toBe("Deriv.com");
    });
});
// mock
const platforms = {
    trader: "Deriv Trader",
    dBot: "Deriv Bot",
};

describe("BrandUtils.getPlatformName", () => {
    test("should return platform settings if domain is allowed", () => {
        window.location.host = "localhost:8443";
        // Mocking the platform key
        const platformKey = "trader";

        // Call the function
        const platformSettings = getPlatformName(platformKey as keyof typeof platforms);

        // Assertion
        expect(platformSettings).toEqual("Deriv Trader");
    });
    // Add more test cases as needed
});
