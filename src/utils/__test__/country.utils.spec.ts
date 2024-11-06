import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { getCountry } from "../country.utils";

describe("getCountry", () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it("should return the country code in lowercase when available", async () => {
        // Mock fetch response
        (global.fetch as vi.Mock).mockResolvedValue({
            text: async () => "loc=US\nother=info\n",
        });

        const country = await getCountry();
        expect(country).toBe("us");
    });

    it("should return an empty string if the loc field is not present", async () => {
        (global.fetch as vi.Mock).mockResolvedValue({
            text: async () => "other=info\n",
        });

        const country = await getCountry();
        expect(country).toBe("");
    });

    it("should return an empty string if the fetch fails", async () => {
        (global.fetch as vi.Mock).mockRejectedValue(new Error("Fetch failed"));

        const country = await getCountry();
        expect(country).toBe("");
    });
});
