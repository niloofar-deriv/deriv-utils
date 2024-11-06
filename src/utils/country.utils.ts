import Cookies from "js-cookie";
import { cloudflareTrace } from "../constants/url.constants";

interface TraceData {
    loc?: string;
}
export const getCountry = async (): Promise<string> => {
    try {
        const response = await fetch(cloudflareTrace).catch(() => null);
        if (!response) return "";
        const text = await response.text().catch(() => "");
        const entries = text ? text.split("\n").map((v) => v.split("=", 2)) : [];
        const data: TraceData = entries.length ? Object.fromEntries(entries) : {};
        return data.loc?.toLowerCase() || JSON.parse(Cookies.get("website_status") || "{}")?.loc || "";
    } catch (error) {
        return "";
    }
};
