import { NAV } from "./index.js";
import { WINDOW } from "./updown.js";
import notie from "notie";

export default function connection() {
    const isOnline = () => {
        if (NAV.onLine) {
            connection = "online";
            notie.alert({
                type: 1,
                text: "You are online",
                time: 2,
                position: "bottom",
            });
            
        } else {
            connection = "offline";
            notie.alert({
                type: 3,
                text: "You are offline",
                time: 2,
                position: "bottom",
            });
        }
    }
    WINDOW.addEventListener("online", () => isOnline());
    WINDOW.addEventListener("offline", () => isOnline());
}
