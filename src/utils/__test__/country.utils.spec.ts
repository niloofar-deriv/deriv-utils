import { describe, beforeEach, it, expect, vi, Mock } from "vitest";
import { getCountry } from "../country.utils";
import Cookies from "js-cookie";

vi.mock("js-cookie");
global.fetch = vi.fn();

describe("getCountry", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.resetModules();
    });

    it("should return country code from Cloudflare trace", async () => {
        (global.fetch as Mock).mockResolvedValueOnce({
            text: () => Promise.resolve("loc=US\nother=value"),
        });

        const result = await getCountry();
        expect(result).toBe("us");
    });

    it("should return country code from cookie when Cloudflare fails", async () => {
        vi.clearAllMocks();
        vi.resetModules();

        (global.fetch as Mock).mockRejectedValueOnce(new Error("Network error"));
        // Mock cookie value as a JSON string
        (Cookies.get as Mock).mockReturnValue(JSON.stringify({ clients_country: "fr" }));

        const { getCountry } = await import("../country.utils");
        const result = await getCountry();
        expect(result).toBe("fr");
    });

    it("should return empty string if no country data is available", async () => {
        vi.clearAllMocks();
        vi.resetModules();
        (global.fetch as Mock).mockRejectedValueOnce(new Error("Network error"));
        (Cookies.get as Mock).mockReturnValue(JSON.stringify({}));
        const { getCountry } = await import("../country.utils");
        const result = await getCountry();
        expect(result).toBe("");
    });
});
