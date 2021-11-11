import React, { useEffect, useState } from "react";
import { Board } from "../components/Board";
import { getService } from "../services";

export const LandingBottom = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    async function fetchRequests() {
    try {
      const request = await getService("/request");
      setRequests(request.data);
    } catch (e) {
      setRequests([])
      }
    }
    fetchRequests()
  }, []);
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
      <Board requests={requests} />
    </div>
  );
};
