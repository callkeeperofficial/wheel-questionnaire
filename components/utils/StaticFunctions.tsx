import { Router } from "../../types/RouterType";
import { oneLink } from "./SmartOneLink";

// console.log("StaticFunction", oneLink);

export const goToLiferadar = (deepLinkValue: string) => () => {
    const link = oneLink.clickURL + "&deep_link_value=" + deepLinkValue;
    // console.log("goToLiferadar", link);
    return window.open(link, "blank");
};

export const openPrivacy = () => window.open("https://liferadar.app/privacy", "blank");

export const goToTest = (router: Router) => router.replace("test");
export const goToQrPage = (router: Router) => router.replace("qr-page");
export const goBack = (router: Router) => router.back();
export const goToFinish = (router: Router) => router.replace("congratulations-screen");