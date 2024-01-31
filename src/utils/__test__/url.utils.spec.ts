import { describe, test, expect, vitest } from "vitest";
import { URLUtils } from "../index";

function setSearchParam(queryString: string) {
    Object.defineProperty(window, "location", {
        writable: true,
        value: {
            pathname: "",
            search: queryString,
        },
    });
}

describe("getLoginInfoFromURL", () => {
    test("should return correct data from url query params if present", () => {
        setSearchParam("?acct1=VRTC1069&token1=a1-xbczn&cur1=USD&acct2=CR1069&token2=a1-xbzn2&cur2=GBP");
        const expected = {
            loginInfo: [
                {
                    loginid: "VRTC1069",
                    token: "a1-xbczn",
                    currency: "USD",
                },
                {
                    loginid: "CR1069",
                    token: "a1-xbzn2",
                    currency: "GBP",
                },
            ],
            paramsToDelete: ["acct1", "token1", "cur1", "acct2", "token2", "cur2"],
        };

        const output = URLUtils.getLoginInfoFromURL();
        expect(output).toStrictEqual(expected);
    });

    test("should return empty arrays if url query params is not present", () => {
        setSearchParam("");
        const expected = {
            loginInfo: [],
            paramsToDelete: [],
        };
        const output = URLUtils.getLoginInfoFromURL();
        expect(output).toStrictEqual(expected);
    });

    test("should return empty arrays if non matching query param is present", () => {
        setSearchParam("?something=not?&related=to&the=code");
        const expected = {
            loginInfo: [],
            paramsToDelete: [],
        };
        const output = URLUtils.getLoginInfoFromURL();
        expect(output).toStrictEqual(expected);
    });
});

describe("filterSearchParams", () => {
    window.history.pushState = vitest.fn();

    test("should remove matching query params", () => {
        setSearchParam("?key1=somevalue&key2=key1&key3=someothervalue&key4=value4");
        URLUtils.filterSearchParams(["key1", "key3"]);
        expect(window.history.pushState).toBeCalledWith(null, "", "?key2=key1&key4=value4");
    });

    test("should not remove query params that do not match", () => {
        const expected = "?one=1&two=2&three=3";
        setSearchParam(expected);
        URLUtils.filterSearchParams(["key1", "key3"]);
        expect(window.history.pushState).toBeCalledWith(null, "", expected);
    });

    test("should not remove anything if an invalid array is passed", () => {
        const expected = "?one=1&two=2&three=3";
        setSearchParam(expected);
        /** @ts-expect-error invalid state test */
        URLUtils.filterSearchParams(["", undefined, null]);
        expect(window.history.pushState).toBeCalledWith(null, "", expected);
    });
});
