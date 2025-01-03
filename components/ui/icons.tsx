export function MoonIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      color="#000000"
      fill="none"
      className={className}
    >
      <path
        d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PythonIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <defs>
        <linearGradient
          id="a"
          x1={-133.268}
          y1={-202.91}
          x2={-133.198}
          y2={-202.84}
          gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#387eb8" />
          <stop offset={1} stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={-133.575}
          y1={-203.203}
          x2={-133.495}
          y2={-203.133}
          gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffe052" />
          <stop offset={1} stopColor="#ffc331" />
        </linearGradient>
      </defs>
      <path
        d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z"
        style={{
          fill: "url(#a)",
        }}
      />
      <path
        d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z"
        style={{
          fill: "url(#b)",
        }}
      />
    </svg>
  );
}

export function DockerIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -35.5 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <g>
        <path
          d="M250.715745,70.4971666 C244.951102,66.4973277 231.740464,64.997388 221.412146,66.9973071 C220.211179,56.9977092 214.68673,48.2480609 205.078993,40.4983724 L199.554544,36.4985331 L195.711449,42.248302 C190.90758,49.7480006 188.505646,60.2475786 189.226226,70.2471769 C189.46642,73.7470364 190.667387,79.9967847 194.270289,85.496564 C190.90758,87.4964838 183.941971,89.996383 174.814621,89.996383 L1.15476998,89.996383 L0.674383104,91.9963028 C-1.00697093,101.9959 -1.00697093,133.244645 18.6888904,157.243681 C33.5808831,175.492947 55.6786788,184.742575 84.7420842,184.742575 C147.672763,184.742575 194.270289,154.493791 216.127891,99.7459909 C224.774854,99.9959813 243.269748,99.7459909 252.637292,80.996745 C252.877486,80.4967649 253.357872,79.4968046 255.039227,75.7469554 L256,73.7470364 L250.715745,70.4971666 L250.715745,70.4971666 Z M139.986573,0 L113.565295,0 L113.565295,24.9989952 L139.986573,24.9989952 L139.986573,0 L139.986573,0 Z M139.986573,29.9987943 L113.565295,29.9987943 L113.565295,54.9977896 L139.986573,54.9977896 L139.986573,29.9987943 L139.986573,29.9987943 Z M108.761427,29.9987943 L82.3401495,29.9987943 L82.3401495,54.9977896 L108.761427,54.9977896 L108.761427,29.9987943 L108.761427,29.9987943 Z M77.5362814,29.9987943 L51.1150037,29.9987943 L51.1150037,54.9977896 L77.5362814,54.9977896 L77.5362814,29.9987943 L77.5362814,29.9987943 Z M46.311135,59.9975886 L19.8898576,59.9975886 L19.8898576,84.9965839 L46.311135,84.9965839 L46.311135,59.9975886 L46.311135,59.9975886 Z M77.5362814,59.9975886 L51.1150037,59.9975886 L51.1150037,84.9965839 L77.5362814,84.9965839 L77.5362814,59.9975886 L77.5362814,59.9975886 Z M108.761427,59.9975886 L82.3401495,59.9975886 L82.3401495,84.9965839 L108.761427,84.9965839 L108.761427,59.9975886 L108.761427,59.9975886 Z M139.986573,59.9975886 L113.565295,59.9975886 L113.565295,84.9965839 L139.986573,84.9965839 L139.986573,59.9975886 L139.986573,59.9975886 Z M171.211719,59.9975886 L144.790441,59.9975886 L144.790441,84.9965839 L171.211719,84.9965839 L171.211719,59.9975886 L171.211719,59.9975886 Z"
          fill="#2396ED"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export function PostgresIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 264"
      width={size}
      height={size}
      className={className}
    >
      <path d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" />
      <path
        d="M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13"
        fill="#336791"
      />
      <path
        d="M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3"
        fill="#FFF"
      />
      <path
        d="M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z"
        fill="#FFF"
      />
    </svg>
  );
}

export function FastIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      id="svg8"
      viewBox="0 0 6.3499999 6.3499999"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs id="defs2" />
      <path
        id="path875-5-9-7-3-2-3-9-9-8-0-0-5-87-7"
        fill="#419285"
        fillOpacity="0.980392"
        stroke="none"
        strokeWidth="0.0112167"
        stopColor="#000000"
        d="M 3.175 0.53433431 A 2.6405416 2.6320024 0 0 0 0.53433431 3.166215 A 2.6405416 2.6320024 0 0 0 3.175 5.7986125 A 2.6405416 2.6320024 0 0 0 5.8156657 3.166215 A 2.6405416 2.6320024 0 0 0 3.175 0.53433431 z M 2.9925822 1.7259928 L 4.6539795 1.7259928 L 2.9858643 2.8985311 L 4.1263631 2.8985311 L 1.6960205 4.6064372 L 2.2236369 3.4344157 L 2.4649658 2.8985311 L 2.9925822 1.7259928 z "
      />
      <path
        id="path815"
        d="M 0,0 H 6.35 V 6.35 H 0 Z"
        fill="none"
        strokeWidth="0.264583"
      />
    </svg>
  );
}

export function TailwindIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
        fill="#62BAF3"
      />
    </svg>
  );
}

export function DjangoIcon({
  className,
  size,
  color,
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={size}
      height={size}
      viewBox="0 0 436.505 152.503"
      className={className}
    >
      <g>
        <g>
          <path
            fill="currentColor"
            d="M51.464,0h23.872v110.496c-12.246,2.325-21.237,3.255-31.002,3.255C15.191,113.75,0,100.576,0,75.308    c0-24.337,16.122-40.147,41.078-40.147c3.875,0,6.82,0.309,10.386,1.239V0z M51.464,55.62c-2.79-0.929-5.115-1.239-8.06-1.239    c-12.091,0-19.067,7.441-19.067,20.461c0,12.712,6.666,19.687,18.912,19.687c2.634,0,4.805-0.155,8.215-0.619V55.62z"
          />
          <path
            fill="currentColor"
            d="M113.312,36.865v55.338c0,19.067-1.395,28.212-5.58,36.118c-3.876,7.597-8.992,12.401-19.532,17.672    l-22.167-10.541c10.541-4.96,15.656-9.299,18.911-15.967c3.411-6.82,4.497-14.726,4.497-35.497V36.865H113.312z M89.441,0.127    h23.871v24.492H89.441V0.127z"
          />
          <path
            fill="currentColor"
            d="M127.731,42.29c10.542-4.959,20.617-7.129,31.623-7.129c12.246,0,20.306,3.254,23.872,9.61    c2.014,3.565,2.634,8.215,2.634,18.137v48.517c-10.697,1.55-24.182,2.636-34.102,2.636c-19.996,0-28.988-6.978-28.988-22.478    c0-16.742,11.936-24.492,41.234-26.973v-5.27c0-4.34-2.17-5.889-8.216-5.889c-8.835,0-18.756,2.48-28.058,7.286V42.29z     M165.089,80.268c-15.812,1.55-20.927,4.031-20.927,10.231c0,4.65,2.946,6.82,9.456,6.82c3.566,0,6.82-0.309,11.471-1.084V80.268z    "
          />
          <path
            fill="currentColor"
            d="M197.487,40.585c14.105-3.72,25.731-5.424,37.512-5.424c12.246,0,21.082,2.789,26.354,8.215    c4.96,5.114,6.509,10.694,6.509,22.632v46.812H243.99V66.938c0-9.145-3.1-12.557-11.625-12.557c-3.255,0-6.2,0.31-11.007,1.705    v56.734h-23.871V40.585z"
          />
          <path
            fill="currentColor"
            d="M277.142,125.842c8.372,4.34,16.742,6.354,25.577,6.354c15.655,0,22.321-6.354,22.321-21.546    c0-0.155,0-0.31,0-0.465c-4.65,2.324-9.301,3.255-15.5,3.255c-20.927,0-34.26-13.796-34.26-35.652    c0-27.129,19.688-42.473,54.564-42.473c10.232,0,19.688,1.084,31.159,3.409l-8.174,17.219c-6.356-1.24-0.509-0.166-5.312-0.631    v2.481l0.309,10.074l0.154,13.022c0.155,3.254,0.155,6.51,0.311,9.765c0,2.945,0,4.341,0,6.511c0,20.462-1.705,30.072-6.82,37.977    c-7.441,11.627-20.307,17.362-38.598,17.362c-9.301,0-17.36-1.395-25.732-4.651V125.842z M324.576,54.536c-0.31,0-0.619,0-0.774,0    h-1.706c-4.649-0.155-10.074,1.084-13.796,3.409c-5.734,3.256-8.681,9.147-8.681,17.517c0,11.937,5.892,18.757,16.432,18.757    c3.255,0,5.891-0.621,8.99-1.55v-1.706v-6.509c0-2.79-0.154-5.892-0.154-9.146l-0.154-11.005l-0.156-7.906V54.536z"
          />
          <path
            fill="currentColor"
            d="M398.062,34.85c23.871,0,38.443,15.037,38.443,39.373c0,24.958-15.19,40.614-39.373,40.614    c-23.873,0-38.599-15.037-38.599-39.218C358.534,50.505,373.726,34.85,398.062,34.85z M397.595,95.614    c9.147,0,14.573-7.596,14.573-20.772c0-13.02-5.271-20.771-14.415-20.771c-9.457,0-14.884,7.597-14.884,20.771    C382.87,88.019,388.296,95.614,397.595,95.614z"
          />
        </g>
      </g>
    </svg>
  );
}
