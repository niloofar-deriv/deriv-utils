/**
 * Brand configuration object containing details about the Deriv brand.
 * @typedef {Object} BrandConfig
 * @property {string} brandName - The name of the brand, e.g., "Deriv".
 * @property {string} domainName - The domain name associated with the brand, e.g., "Deriv.com".
 */

/** @type {BrandConfig} */
export const brandConfig = {
    brandName: "Deriv",
    domainName: "Deriv.com",
} as const;

/**
 * Object containing legal entities associated with the Deriv brand.
 * @typedef {Object} LandingCompanies
 * @property {string} fx - Legal entity for FX operations, e.g., "Deriv (FX) Ltd".
 * @property {string} maltainvest - Legal entity for operations in Malta, e.g., "Deriv Investments (Europe) Limited".
 * @property {string} svg - Legal entity for operations in SVG, e.g., "Deriv (SVG) LLC".
 * @property {string} v - Legal entity for V operations, e.g., "Deriv (V) Ltd".
 */

/** @type {LandingCompanies} */
export const landingCompanies = {
    fx: "Deriv (FX) Ltd",
    maltainvest: "Deriv Investments (Europe) Limited",
    svg: "Deriv (SVG) LLC",
    v: "Deriv (V) Ltd",
} as const;

/**
 * Object containing platforms offered by the Deriv brand.
 * @typedef {Object} Platforms
 * @property {string} trader - Deriv Trader platform, e.g., "Deriv Trader".
 * @property {string} dBot - Deriv Bot platform, e.g., "Deriv Bot".
 * @property {string} mt5 - Deriv MT5 platform, e.g., "Deriv MT5".
 * @property {string} cTrader - Deriv cTrader platform, e.g., "Deriv cTrader".
 * @property {string} derivX - Deriv X platform, e.g., "Deriv X".
 * @property {string} smartTrader - SmartTrader platform, e.g., "SmartTrader".
 * @property {string} bBot - Binary Bot platform, e.g., "Binary Bot".
 * @property {string} go - Deriv GO platform, e.g., "Deriv GO".
 */

/** @type {Platforms} */
export const platforms = {
    trader: "Deriv Trader",
    dBot: "Deriv Bot",
    mt5: "Deriv MT5",
    cTrader: "Deriv cTrader",
    derivX: "Deriv X",
    smartTrader: "SmartTrader",
    bBot: "Binary Bot",
    go: "Deriv GO",
} as const;

export type BrandConfig = keyof typeof brandConfig;
export type landingCompanies = keyof typeof landingCompanies;
export type platforms = keyof typeof platforms;
