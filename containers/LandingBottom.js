import React, { useEffect, useState } from "react";
import { Requests } from "../components/Drawer/Requests";
import { getService } from "../services";

export const LandingBottom = () => {
  const [requests, setRequests] = useState([]);
  useEffect(async () => {
    try {
      const request = await getService("/request");
      setRequests(request.data);
    } catch (e) {}
  }, []);
  return (
    <div style={{width:"50%"}}>
      <Requests requests={requests} />
    </div>
  );
};
