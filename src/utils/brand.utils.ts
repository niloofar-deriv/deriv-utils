import { brandConfig, landingCompanies, platforms } from "../constants/brand.constants";

/**
 * This function will check whether the landing company is available in our brand configuration
 *
 * @param {landingCompanies} landingCompany - landingCompany will be the string and we will check if its available in legal entities.
 * @returns {string} Returns name of landing company.
 */
export const getLegalEntityName = (landingCompany: keyof typeof landingCompanies): string => {
    return landingCompanies[landingCompany];
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

export const getPlatformName = (platformKey: keyof typeof platforms): string => {
    const allowedBrandConfig = platforms[platformKey];

    return allowedBrandConfig;
};
