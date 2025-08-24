
import {atom, selector} from "recoil"
import axios from "axios"


export const networkAtom = atom({
    key: "networkAtom",
    default: 104

});


export const notification = selector({
    key: "notificationAtom",
    get: async() => {
        const res = await axios.get("https://dummy.restapiexample.com/api/v1/employee/1");
        const json = await res.json();
        const age = json.employee_age;
        console.log(age);
        return age
    }
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 12

});


export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0

});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get : ({get}) => {
     const networkAtomCount = get(networkAtom);
     const jobsAtomCount = get(jobsAtom);
     const notificationAtomCount = notification.employee_age;
     const messagingAtomCount = get(messagingAtom);

     return networkAtomCount +jobsAtomCount + notificationAtomCount + messagingAtomCount
    }
})