import { Router } from "../../types/RouterType";

export const goToLiferadar = (deepLinkValue: string) => () =>
    window.open("https://liferadar.onelink.me/IwFG/n7yuoky4?deep_link_value=" + deepLinkValue, "blank");

export const openPrivacy = () => window.open("https://liferadar.app/privacy", "blank");

export const goToTest = (router: Router) => router.replace("test");
export const goToQrPage = (router: Router) => router.replace("qr-page");
export const goBack = (router: Router) => router.back();
export const goToFinish = (router: Router) => router.replace("congratulations-screen");