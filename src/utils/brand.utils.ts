import { brandConfig } from "../constants/brand.constants";

/**
 * This regex will match any official deriv production and testing domain names.
 * Allowed deriv domains: localhost, binary.sx, binary.com, deriv.com, deriv.be, deriv.me and their subdomains.
 *
 * @param {string} domainName - The path to be match with regex.
 * @returns {string} Returns the boolean whether its valid/allowed URL.
 */
export const isDomainAllowed = (domainName: string) => {
    return /^(((.*)\.)?(localhost:8443|pages.dev|binary\.(sx|com)|deriv.(com|me|be|dev)))$/.test(domainName);
};

/**
 * This function will check whether the landing company is available in our brand configuration
 *
 * @param {legalEntities} landingCompany - landingCompany will be the string and we will check if its available in legal entities.
 * @returns {string} Returns name of landing company.
 */
export const getLegalEntityName = (landingCompany: keyof (typeof brandConfig)["legalEntities"]): string => {
    return brandConfig.legalEntities[landingCompany];
};

/**
 * This function will give the domain name from brand config file.
 *
 * @returns {string} Returns name of Brand website name.
 */
export const getBrandWebsiteName = (): string => {
    return brandConfig.domainName;
};

/**
 * This function will check the allowed domain and then it will return configuration data.
 *
 * @param {TPlatforms} platformKey - platformKey will be the key of our platforms.
 *
 * @returns {Object} Returns allowed platform name and icon.
 */

export const getPlatformName = (platformKey: keyof (typeof brandConfig)["platforms"]): string => {
    const allowedBrandConfig = brandConfig.platforms[platformKey];

    return allowedBrandConfig;
};
