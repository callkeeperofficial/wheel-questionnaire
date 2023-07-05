import { Router } from "../../types/RouterType";

export const goToLiferadar = (deepLinkValue: string) => () =>
    window.open("https://liferadar.onelink.me/IwFG/5x9vfml6?deep_link_value=" + deepLinkValue, "blank");

export const openPrivacy = () => window.open("https://liferadar.app/privacy", "blank");

export const goToTest = (router: Router) => router.push("test");
export const goToQrPage = (router: Router) => router.push("qr-page");
export const goBack = (router: Router) => router.back();
export const goToFinish = (router: Router) => router.push("congratulations-screen");;