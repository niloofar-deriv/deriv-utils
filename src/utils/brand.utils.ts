import { brandConfig } from "../constants/brand.constants";

/**
 * This regex will match any official deriv production and testing domain names.
 * Allowed deriv domains: localhost, binary.sx, binary.com, deriv.com, deriv.be, deriv.me and their subdomains.
 *
 * @param {string} domain_name - The path to be match with regex.
 * @returns {string} Returns the boolean whether its valid/allowed URL.
 */
export const isDomainAllowed = (domain_name: string) => {
    return /^(((.*)\.)?(localhost:8443|pages.dev|binary\.(sx|com)|deriv.(com|me|be|dev)))$/.test(domain_name);
};

type TLandingCompany = {
    fx: string;
    maltainvest: string;
    svg: string;
    v: string;
};

/**
 * This function will check whether the landing company is available in our brand configuration
 *
 * @param {TLandingCompany} landing_company - landing_company will be the string and we will check if its available in legal entities.
 * @returns {string} Returns name of landing company.
 */
export const getLegalEntityName = (landing_company: keyof TLandingCompany) => {
    return brandConfig.legal_entities[landing_company];
};

/**
 * This function will give the domain name from brand config file.
 *
 * @returns {string} Returns name of Brand website name.
 */
export const getBrandWebsiteName = (): string => {
    return brandConfig.domain_name;
};

/**
 * This function will check the allowed domain and then it will return configuration data.
 *
 * @param {TPlatforms} platform_key - platform_key will be the key of our platforms.
 *
 * @returns {Object} Returns allowed platform name and icon.
 */
type TPlatform = {
    name: string;
    icon: string;
};
type TPlatforms = {
    ctrader: TPlatform;
    trader: TPlatform;
    dbot: TPlatform;
    mt5: TPlatform;
    dxtrade: TPlatform;
    smarttrader: TPlatform;
    bbot: TPlatform;
    go: TPlatform;
};

export const getPlatformSettings = (platform_key: keyof TPlatforms): TPlatform => {
    const allowed_brandConfig = brandConfig.platforms[platform_key];

    if (!isDomainAllowed(window.location.host)) {
        // Remove all official platform logos if the app is hosted under unofficial domain
        allowed_brandConfig.icon = "";
    }
    return allowed_brandConfig;
};
