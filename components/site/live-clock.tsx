"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString("de-DE", {
          timeZone: "Europe/Berlin",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
