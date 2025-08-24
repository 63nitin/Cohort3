import React from "react";
import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atoms";



export default function App(){
   return <RecoilRoot>
    <MainApp/>
   </RecoilRoot>
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  console.log(totalNotificationCount)


  return(
  <>
    <button>Home</button>

    <button>MY network ({networkNotificationCount })</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button>Messeging ({messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>

    <button onClick={()=>{
      setMessagingAtomCount(messagingAtomCount + 1)
    }}>Me({totalNotificationCount})</button>
    </>
  )
}