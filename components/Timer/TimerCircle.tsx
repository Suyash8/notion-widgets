import { useState, useEffect } from "react";

export function TimerText({ time, totalTime }: TimerTextProps) {
  const [timeText, setTimeText] = useState({
    minutes: String(
      Math.floor(
        (parseInt(totalTime.toString()) - parseInt(time.toString())) / 60
      )
    ).padStart(2, "0"),
    seconds: String(
      (parseInt(totalTime.toString()) - parseInt(time.toString())) % 60
    ).padStart(2, "0"),
  });

  useEffect(() => {
    setTimeText({
      minutes: String(
        Math.floor(
          (parseInt(totalTime.toString()) - parseInt(time.toString())) / 60
        )
      ).padStart(2, "0"),
      seconds: String(
        (parseInt(totalTime.toString()) - parseInt(time.toString())) % 60
      ).padStart(2, "0"),
    });
  }, [time, totalTime]);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span>
        {timeText.minutes} : {timeText.seconds}
      </span>
    </div>
  );
}

export function TimerCircle({
  progress,
  maxProgress,
  totalTimeInMinutes,
}: TimerCircleProps) {
  return (
    <div>
      <svg
        className="relative"
        viewBox="0 0 358 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="179.178" cy="176.588" r="163.529" fill="#2B2B2B"></circle>
        <g filter="url(#filter0_iiiii_996_505)">
          <circle
            cx="179.176"
            cy="179.295"
            r="163.529"
            stroke="#222222"
            stroke-width="30"
          ></circle>
        </g>
        <circle
          cx="179.176"
          cy="179.294"
          r="163.53"
          stroke="url(#paint0_angular_996_505)"
          stroke-width="30"
          stroke-dasharray={maxProgress}
          stroke-linecap="round"
          // stroke-dashoffset="1027.4892932830778"
          stroke-dashoffset={progress}
          className="transform -rotate-90 transform-origin-center-center transition-stroke-dashoffset duration-300 ease-linear ei4p60n0"
        ></circle>
        <defs>
          <filter
            id="filter0_iiiii_996_505"
            x="-7.35352"
            y="-7.23486"
            width="367.059"
            height="367.059"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="2" dy="2"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_996_505"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="-4" dy="-4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_996_505"
              result="effect2_innerShadow_996_505"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="-2" dy="-2"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.754167 0 0 0 0 0.754167 0 0 0 0 0.754167 0 0 0 0.13 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_996_505"
              result="effect3_innerShadow_996_505"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="2" dy="2"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect3_innerShadow_996_505"
              result="effect4_innerShadow_996_505"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            ></feColorMatrix>
            <feOffset dx="-8" dy="-8"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            ></feComposite>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0.08 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="effect4_innerShadow_996_505"
              result="effect5_innerShadow_996_505"
            ></feBlend>
          </filter>
          <radialGradient
            id="paint0_angular_996_505"
            cx="180"
            cy="180"
            r="800"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(189.765 179.294) rotate(-90)"
            spreadMethod="pad"
          >
            <stop offset="0.125565" stop-color="#27B1BA"></stop>
            <stop offset="0.37875" stop-color="#1680E2"></stop>
            <stop offset="0.621158" stop-color="#3D6CE6"></stop>
            <stop offset="0.794879" stop-color="#0CCFDC"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

interface TimerCircleProps {
  progress: number;
  maxProgress: number;
  totalTimeInMinutes: number;
}

interface TimerTextProps {
  time: Number;
  totalTime: Number;
}
