"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactNode, useEffect } from "react";

function AosInitializer() {
  useEffect(() => {
    AOS.init();
  }, []);
}

export { AosInitializer };
