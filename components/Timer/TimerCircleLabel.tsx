export function TimerCircleLabel({ totalTime }: TimerCircleLabelProps) {
  let interval = 1;

  switch (true) {
    case totalTime % 2 === 0 && totalTime >= 22 && totalTime <= 50:
      interval = 2;
      break;
    case totalTime % 3 === 0 && totalTime > 21 && totalTime < 50:
      interval = 3;
      break;
    case totalTime % 5 === 0 && totalTime > 21 && totalTime < 50:
      interval = 5;
      break;
    case totalTime % 7 === 0 && totalTime > 21 && totalTime < 50:
      interval = 7;
      break;
    case totalTime > 22 && totalTime < 50:
      interval = 3;
      break;
  }

  const labelAngles = [];
  for (let i = totalTime; i >= 1; i--) {
    const angle = (360 / totalTime) * i;
    if (i % interval === 0) {
      labelAngles.push(angle);
    }
  }

  labelAngles.reverse();

  return (
    <div className="absolute -inset-5">
      {labelAngles.map((angle, index) => (
        <div
          key={index}
          className="absolute inset-0 text-white"
          style={{
            transform: `rotate(${angle}deg)`,
            width: "100%",
            textAlign: "center",
          }}
        >
          <span
            className="text-white inline-block text-lg"
            style={{
              transform: `rotate(${-angle}deg)`,
            }}
          >
            {index * interval + interval}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TimerCircleLabelSticks({ totalTime }: TimerCircleLabelProps) {
  const labelAngles = [];
  for (let i = 1; i <= totalTime; i++) {
    const angle = (360 / totalTime) * i;
    labelAngles.push(angle);
  }

  return (
    <div className="absolute inset-1 square-[230px]">
      {labelAngles.map((angle, index) => (
        <div
          key={index}
          className="absolute inset-0 text-white"
          style={{
            transform: `rotate(${angle}deg)`,
            width: "100%",
            textAlign: "center",
          }}
        >
          <span className="text-white text-lg">|</span>
        </div>
      ))}
    </div>
  );
}

interface TimerCircleLabelProps {
  totalTime: number;
}
