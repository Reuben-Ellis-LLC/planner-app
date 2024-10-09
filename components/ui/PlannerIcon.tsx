import * as React from 'react';

export function PlannerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="48" fill="#16213e" />
      <rect x="20" y="20" width="60" height="60" rx="5" fill="#0f3460" />
      <rect x="25" y="25" width="50" height="40" rx="3" fill="#e94560" />
      <line x1="30" y1="35" x2="70" y2="35" stroke="white" strokeWidth="2" />
      <line x1="30" y1="45" x2="70" y2="45" stroke="white" strokeWidth="2" />
      <line x1="30" y1="55" x2="70" y2="55" stroke="white" strokeWidth="2" />
      <rect x="30" y="70" width="40" height="5" rx="1" fill="white" />
      <rect x="30" y="78" width="30" height="5" rx="1" fill="white" />
      <circle
        cx="75"
        cy="25"
        r="8"
        fill="#1a1a2e"
        stroke="#e94560"
        strokeWidth="2"
      />
      <text x="72" y="29" fontFamily="Arial" fontSize="10" fill="#e94560">
        D
      </text>
    </svg>
  );
}
