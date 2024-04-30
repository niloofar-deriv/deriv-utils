import { brandConfig, LandingCompanies, landingCompanies, Platforms, platforms } from "../constants/brand.constants";

/**
 * This function will check whether the landing company is available in our brand configuration
 *
 * @param {LandingCompanies} landingCompany - landingCompany will be the string and we will check if its available in legal entities.
 * @returns {string} Returns name of landing company.
 */
export const getLegalLandingCompany = (landingCompany: LandingCompanies) => {
    return landingCompanies[landingCompany];
};

/**
 * It returns the domain name of a brand's website from a configuration object called brandConfig.
 *
 * @returns {string} Returns the domain name of a brand's website.
 */
export const getBrandWebsiteName = () => {
    return brandConfig.domainName;
};

/**
 * This function will check the allowed domain and then it will return configuration data.
 *
 * @param {Platforms} platformKey - platformKey will be the key of our platforms.
 *
 * @returns {Object} Returns allowed platform name.
 */

export const getPlatformName = (platformKey: Platforms) => {
    return platforms[platformKey];
};
