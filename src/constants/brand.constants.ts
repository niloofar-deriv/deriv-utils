/**
 * Brand configuration object containing details about the Deriv brand.
 * @typedef {Object} BrandConfig
 * @property {string} brandName - The name of the brand, e.g., "Deriv".
 * @property {string} domainName - The domain name associated with the brand, e.g., "Deriv.com".
 * @property {Object.<string, string>} legalEntities - Legal entities associated with the brand.
 * @property {string} legalEntities.fx - Legal entity for FX operations, e.g., "Deriv (FX) Ltd".
 * @property {string} legalEntities.maltainvest - Legal entity for operations in Malta, e.g., "Deriv Investments (Europe) Limited".
 * @property {string} legalEntities.svg - Legal entity for operations in SVG, e.g., "Deriv (SVG) LLC".
 * @property {string} legalEntities.v - Legal entity for V operations, e.g., "Deriv (V) Ltd".
 * @property {Object.<string, string>} platforms - Platforms offered by the brand.
 * @property {string} platforms.trader - Deriv Trader platform, e.g., "Deriv Trader".
 * @property {string} platforms.dBot - Deriv Bot platform, e.g., "Deriv Bot".
 * @property {string} platforms.mt5 - Deriv MT5 platform, e.g., "Deriv MT5".
 * @property {string} platforms.cTrader - Deriv cTrader platform, e.g., "Deriv cTrader".
 * @property {string} platforms.derivX - Deriv X platform, e.g., "Deriv X".
 * @property {string} platforms.smartTrader - SmartTrader platform, e.g., "SmartTrader".
 * @property {string} platforms.bBot - Binary Bot platform, e.g., "Binary Bot".
 * @property {string} platforms.go - Deriv GO platform, e.g., "Deriv GO".
 */

/** @type {BrandConfig} */
export const brandConfig = {
    brandName: "Deriv",
    domainName: "Deriv.com",
    legalEntities: {
        fx: "Deriv (FX) Ltd",
        maltainvest: "Deriv Investments (Europe) Limited",
        svg: "Deriv (SVG) LLC",
        v: "Deriv (V) Ltd",
    },
    platforms: {
        trader: "Deriv Trader",
        dBot: "Deriv Bot",
        mt5: "Deriv MT5",
        cTrader: "Deriv cTrader",
        derivX: "Deriv X",
        smartTrader: "SmartTrader",
        bBot: "Binary Bot",
        go: "Deriv GO",
    },
} as const;

export type BrandConfig = keyof typeof brandConfig;
