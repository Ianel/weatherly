import { proxy } from "valtio";

export const states = proxy({
    weatherInfos: {},
    loading: true,
    isActive: false,
});
