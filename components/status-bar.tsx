"use client";

import { useEffect, useState } from "react";

const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  // second: "2-digit",
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
    <div className="flex justify-evenly items-center gap-2 py-3 border rounded-2xl px-3 w-full mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="border border-primary rounded-full p-2 text-primary mr-auto"
      >
        <path
          d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <div className="">Victor Ajayi</div>
      <div
        className="flex items-center gap-1 px-2 text-sm text-secondary ml-auto"
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
