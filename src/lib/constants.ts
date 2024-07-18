import { ServiceConst } from "./types";

export const PRIMARY_COLOR: string = "#FF3008";
export const SECONDARY_COLOR: string = "white";

export const services: ServiceConst[] = [
    {
        serviceName: "Chatbot",
        href: "chatbot",
        image: require(`@//images/chatbotlogo.png`)
    },
    {
        serviceName: "SuperMap",
        href: "map",
        image: require(`@//images/maplogo.png`)
    },
    {
        serviceName: "Events",
        href: "events",
        image: require(`@//images/eventslogo.png`)
    },
    // {
    //     serviceName: "Test",
    //     href: "events",
    //     image: require(`@//images/eventslogo.png`)
    // },
    // {
    //     serviceName: "Support",
    //     href: "events",
    //     image: require(`@//images/eventslogo.png`)
    // },
    // {
    //     serviceName: "Report",
    //     href: "events",
    //     image: require(`@//images/eventslogo.png`)
    // },
    // {
    //     serviceName: "Job",
    //     href: "events",
    //     image: require(`@//images/eventslogo.png`)
    // }
];