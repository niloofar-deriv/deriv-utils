import { describe, expect, test } from "vitest";
import { getBrandWebsiteName, getLegalEntityName, getPlatformName, isDomainAllowed } from "../brand.utils";

describe("BrandUtils.isDomainAllowed", () => {
    test("localhost:8443 should be allowed", () => {
        expect(isDomainAllowed("localhost:8443")).toBe(true);
    });

    test("subdomain.localhost:8443 should be allowed", () => {
        expect(isDomainAllowed("subdomain.localhost:8443")).toBe(true);
    });

    test("pages.dev should be allowed", () => {
        expect(isDomainAllowed("pages.dev")).toBe(true);
    });

    test("subdomain.pages.dev should be allowed", () => {
        expect(isDomainAllowed("subdomain.pages.dev")).toBe(true);
    });

    test("binary.sx should be allowed", () => {
        expect(isDomainAllowed("binary.sx")).toBe(true);
    });

    test("binary.com should be allowed", () => {
        expect(isDomainAllowed("binary.com")).toBe(true);
    });

    test("deriv.com should be allowed", () => {
        expect(isDomainAllowed("deriv.com")).toBe(true);
    });

    test("deriv.me should be allowed", () => {
        expect(isDomainAllowed("deriv.me")).toBe(true);
    });

    test("deriv.be should be allowed", () => {
        expect(isDomainAllowed("deriv.be")).toBe(true);
    });

    test("deriv.dev should be allowed", () => {
        expect(isDomainAllowed("deriv.dev")).toBe(true);
    });

    test("randomdomain.com should not be allowed", () => {
        expect(isDomainAllowed("randomdomain.com")).toBe(false);
    });

    test("subdomain.randomdomain.com should not be allowed", () => {
        expect(isDomainAllowed("subdomain.randomdomain.com")).toBe(false);
    });

    test("deriv.org should not be allowed", () => {
        expect(isDomainAllowed("deriv.org")).toBe(false);
    });

    test("deriv.com.au should not be allowed", () => {
        expect(isDomainAllowed("deriv.com.au")).toBe(false);
    });

    test("deriv.dev1 should not be allowed", () => {
        expect(isDomainAllowed("deriv.dev1")).toBe(false);
    });

    test("binary.sxx should not be allowed", () => {
        expect(isDomainAllowed("binary.sxx")).toBe(false);
    });
});
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
const brandConfig = {
    platforms: {
        trader: {
            name: "Deriv Trader",
            icon: "IcRebrandingDerivTrader",
        },
        dbot: {
            name: "Deriv Bot",
            icon: "IcRebrandingDerivBot",
        },
    },
};

describe("BrandUtils.getPlatformName", () => {
    test("should return platform settings if domain is allowed", () => {
        window.location.host = "localhost:8443";
        // Mocking the platform key
        const platformKey = "trader";

        // Call the function
        const platformSettings = getPlatformName(platformKey as keyof (typeof brandConfig)["platforms"]);

        // Assertion
        expect(platformSettings).toEqual("Deriv Trader");
    });

    test("should return empty icon if domain is not allowed", () => {
        // Mocking the platform key
        const platformKey = "dbot";

        // Mocking window.location.host to an unallowed domain
        window.location.host = "example.com";

        // Call the function
        const platformSettings = getPlatformName(platformKey);

        // Assertion
        expect(platformSettings).toEqual("");
    });

    // Add more test cases as needed
});
