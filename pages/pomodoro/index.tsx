import Container from "@/components/Container";
import "@/app/globals.css";
import "./index.css";
import RootLayout from "@/app/layout";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import {
  TimerCircleLabel,
  TimerCircleLabelSticks,
} from "@/components/Timer/TimerCircleLabel";
import { TimerCircle, TimerText } from "@/components/Timer/TimerCircle";

export default function Pomodoro() {
  const router = useRouter();
  return (
    <RootLayout>
      <Container>
        <Timer router={router} />
      </Container>
    </RootLayout>
  );
}

function Timer({ router }: TimerProps) {
  const { time: totalTimeInMinutes = 25, break: breakTime = 5 } = router.query;
  const parsedTotalTimeInMinutes =
    Number(totalTimeInMinutes) > 5
      ? Number(totalTimeInMinutes) < 50
        ? Math.floor(Number(totalTimeInMinutes))
        : 50
      : 5;
  const parsedBreakTime =
    Number(breakTime) > 1
      ? Number(breakTime) < 10
        ? Math.floor(Number(breakTime))
        : 10
      : 1;
  const [currentTimerType, setCurrentTimerType] = useState<{
    [key in TimerTypes]: number;
  }>({
    work: 1,
    shortBreak: 0,
    longBreak: 0,
  });
  const totalTime = parsedTotalTimeInMinutes * 60;
  const [time, setTime] = useState(0);
  const maxProgress = 1027.4892932830778;
  const [progress, setProgress] = useState(time != 0 ? maxProgress / time : 0);

  const handleTimerTypeChange = (timerType: TimerTypes) => {
    setCurrentTimerType((prevState) => {
      const updatedTimerType = { ...prevState };

      Object.keys(updatedTimerType).forEach((key) => {
        updatedTimerType[key as TimerTypes] = 0;
      });

      updatedTimerType[timerType] = 1;

      return updatedTimerType;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        // if (prevProgress >= maxProgress || prevProgress >= totalTime) {
        if (prevTime >= totalTime) {
          clearInterval(interval);
          return prevTime;
        }
        return prevTime + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [totalTime]);

  useEffect(() => {
    setProgress((maxProgress / totalTime) * time);
  }, [time, totalTime]);

  return (
    <div className="relative w-200 h-200">
      <TimerCircle
        progress={progress}
        maxProgress={maxProgress}
        totalTimeInMinutes={parsedTotalTimeInMinutes}
      />
      <TimerText time={time} totalTime={totalTime} />
      <TimerCircleLabel totalTime={parsedTotalTimeInMinutes} />
      <TimerCircleLabelSticks totalTime={parsedTotalTimeInMinutes} />
    </div>
  );
}

interface TimerProps {
  router: NextRouter;
}

type TimerTypes = "work" | "shortBreak" | "longBreak";
