import { LocalStorageConstants, AppIDConstants } from "../constants";

export const getActiveLoginid = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlActiveLoginid = urlSearchParams.get("acct1");
    return window.localStorage.getItem(LocalStorageConstants.activeLoginid) || urlActiveLoginid;
};

export const getEnvironmentFromLoginid = (loginid: string | null) => {
    if (loginid && !/^VR/.test(loginid)) return "real";
    return "demo";
};

export const getAppId = () => {
    if (AppIDConstants.userAppId) return AppIDConstants.userAppId;

    const configAppId = window.localStorage.getItem(LocalStorageConstants.configAppId);
    if (configAppId) return configAppId;

    const currentDomain = window.location.hostname;
    const domainAppId = AppIDConstants.domainAppId[currentDomain as keyof typeof AppIDConstants.domainAppId];
    if (domainAppId) return domainAppId;

    return 36300;
};
