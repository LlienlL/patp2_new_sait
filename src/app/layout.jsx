//"use client"

import { cookies } from 'next/headers'
import "@/app/global.scss"
import NavSection from "@/Components/GUI/NavSection/NavSection";
import { NAV_BUTTONS_LIST } from "@/Components/params.js";
import Theme from "@/Components/Theme";

export const metadata = {
    title: "АО НПАТП №2",
    description: "На этой странице вы можете ознакомиться с картами маршрутов автобусов города Нижневартовска. Каждый день на линию выходит 69 автобусов, обслуживающих 11 городских маршрутов",
};


export default async function RootLayout({ children }) {
    const cookiesTheme = cookies().get("theme");

    return (
        <html lang="ru">
            <head>
                <meta name="keywodrs" content="маршруты автобусов, нижневартовск, городские маршруты, карта города, карта маршрутов, транспорт, пассажиры, НПАТП-2, проезд, общественный транспорт, пассажирские перевозки" />
            </head>
            <Theme defaultTheme={cookiesTheme?.value || "light"}>
                <NavSection navButtonsList={NAV_BUTTONS_LIST} />
                {children}
            </Theme>
        </html>
    );
}
