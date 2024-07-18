import { ImageSourcePropType } from "react-native";

export interface ServiceConst {
    serviceName: string;
    href: string;
    image: ImageSourcePropType | undefined;
};