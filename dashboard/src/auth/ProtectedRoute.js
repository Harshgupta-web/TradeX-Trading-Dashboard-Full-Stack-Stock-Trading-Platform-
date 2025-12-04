import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // ensure cookies are sent

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState({ loading: true, ok: false });

  useEffect(() => {
    let mounted = true;
    const verify = async () => {
      try {
        const res = await axios.get("http://localhost:3000/auth/verify");
        if (!mounted) return;
        if (res?.data?.status) setStatus({ loading: false, ok: true });
        else {
          // not authenticated -> redirect to login app
          window.location.href = "http://localhost:3001/login";
        }
      } catch (err) {
        if (!mounted) return;
        window.location.href = "http://localhost:3001/login";
      }
    };
    verify();
    return () => { mounted = false; };
  }, []);

  if (status.loading) return <div>Loading...</div>;
  return status.ok ? children : null;
};

export default ProtectedRoute;
