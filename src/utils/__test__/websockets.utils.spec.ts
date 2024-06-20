import { describe, test, expect, beforeEach, vi } from "vitest";
import { LocalStorageUtils, WebSocketUtils } from "..";
import { LocalStorageConstants } from "../..";
import { getEnvironmentFromLoginid } from "../websocket.utils";

function setLocation({ hostname = "", pathname = "", search = "" }) {
    Object.defineProperty(window, "location", {
        writable: true,
        value: {
            hostname,
            pathname,
            search,
        },
    });
}

beforeEach(() => {
    vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
        if (key === LocalStorageConstants.configServerURL) {
            // Adjust the key as per your constant
            return "user.defined.com";
        }
        if (key === LocalStorageConstants.activeLoginid) {
            // Adjust the key as per your constant
            return "VRTC1000067";
        }
        return null;
    });
    setLocation({ hostname: "" });
});

describe("WebSocketUtils.getActiveLoginid", () => {
    test("should return first loginid from query params (acct1) if peresent", () => {
        setLocation({ search: "?acct1=VRTC1069&token1=a1-xbczn&cur1=USD&acct2=CR1069&token2=a1-xbzn2&cur2=GBP" });

        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.activeLoginid) {
                // Adjust the key as per your constant
                return "VRTC1069";
            }
            return null;
        });

        const output = WebSocketUtils.getActiveLoginid();
        expect(output).toBe("VRTC1069");
    });

    test("should return loginid from the client.active_loginid localstorage key if present", () => {
        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.activeLoginid) {
                return "MF1000420";
            }
            return "";
        });

        const output = WebSocketUtils.getActiveLoginid();
        expect(output).toBe("MF1000420");
    });

    test("should prioritise value from client.active_loginid localstorage key instead of query params (acct1)", () => {
        setLocation({ search: "?acct1=VRTC1069&token1=a1-xbczn&cur1=USD&acct2=CR1069&token2=a1-xbzn2&cur2=GBP" });
        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.activeLoginid) {
                return "MF1000420";
            }
            return "";
        });

        const output = WebSocketUtils.getActiveLoginid();
        expect(output).toBe("MF1000420");
    });

    test("should return null if neither client.active_loginid or query params (acct1) is present", () => {
        setLocation({ search: "?acct2=CR1069&token2=a1-xbzn2&cur2=GBP" });

        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.activeLoginid) {
                return null;
            }
            return null;
        });
        const output = WebSocketUtils.getActiveLoginid();
        expect(output).toBeNull();
    });
});

describe("WebSocketUtils.getEnvironmentFromLoginid", () => {
    test("should return demo environment if is a demo trading account", () => {
        const output = getEnvironmentFromLoginid("VRTC14000");
        expect(output).toBe("demo");
    });

    test("should return demo environment if is a demo wallet account", () => {
        const output = getEnvironmentFromLoginid("VRW4000");
        expect(output).toBe("demo");
    });

    test("should return real environment if is a real trading account", () => {
        const output = getEnvironmentFromLoginid("CR378190");
        expect(output).toBe("real");
    });

    test("should return real environment if is a real wallet account", () => {
        const output = getEnvironmentFromLoginid("CRW378190");
        expect(output).toBe("real");
    });

    test("should default to real environment if it is an invalid account", () => {
        const output = getEnvironmentFromLoginid("very invalid account - XD10923");
        expect(output).toBe("real");
    });
});

describe("WebSocketUtils.getAppId", () => {
    test("should return app id from config.app_id localstorage key", () => {
        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.configAppId) {
                return "18883";
            }
            return "";
        });

        const output = WebSocketUtils.getAppId();
        expect(output).toBe("18883");
    });

    test("should 16929 for app.deriv.com domain", () => {
        setLocation({ hostname: "app.deriv.com" });

        const output = WebSocketUtils.getAppId();
        expect(output).toBe("16929");
    });

    test("should 16303 for staging-app.deriv.com domain", () => {
        setLocation({ hostname: "staging-app.deriv.com" });

        const output = WebSocketUtils.getAppId();
        expect(output).toBe("16303");
    });

    test("should 51072 for test-app.deriv.com domain", () => {
        setLocation({ hostname: "test-app.deriv.com" });

        const output = WebSocketUtils.getAppId();
        expect(output).toBe("51072");
    });

    test("should prioritise app id from config.app_id localstorage", () => {
        setLocation({ hostname: "test-app.deriv.com" });
        vi.spyOn(LocalStorageUtils, "getValue").mockImplementation((key: string) => {
            if (key === LocalStorageConstants.configAppId) {
                return "36489";
            }
            return "";
        });

        const output = WebSocketUtils.getAppId();
        expect(output).toBe("36489");
    });

    test("should return 36300 app id by default if nothing is set", () => {
        const output = WebSocketUtils.getAppId();
        expect(output).toBe("36300");
    });
});
