"use client";

import { useEffect, useState } from "react";

const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Europe/Moscow",
};

export default function StatusBar() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", options)
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", options));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 items-center gap-2 py-3 border rounded-2xl px-3 w-full mt-2">
      <div className="text-sm xs:text-base ml-2">Victor Ajayi</div>
      <div
        className="items-center gap-1 px-2 text-sm text-secondary ml-auto hidden xs:flex"
        suppressHydrationWarning
      >
        <svg
          width="15"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" />
          <path
            d="M7.5 4v3.086a1 1 0 0 0 .293.707L9.5 9.5"
            stroke="currentColor"
          />
        </svg>
        {time}
      </div>
    </div>
  );
}
