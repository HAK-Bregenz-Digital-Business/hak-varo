import { useEffect, useState } from 'react';
import './registration.scss';

export interface RegistrationProps {
  endDate: Date;
  registrationURL: string;
}

export const Registration: React.FC<RegistrationProps> = ({
  endDate,
  registrationURL,
}: RegistrationProps) => {
  const calculateTimeLeft: () => any = () => {
    const difference: number = +endDate - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minuten: Math.floor((difference / 1000 / 60) % 60),
        Sekunden: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    //@ts-ignore
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {
          //@ts-ignore
          timeLeft[interval]
        }{' '}
        {interval}{' '}
      </span>
    );
  });

  return (
    <div className="registration">
      <h1 className="registration__title">
        HAK/HAS Bregenz Minecraft Varo Anmeldung
      </h1>
      <div className="registration__countdown">
        {timerComponents.length > 0 ? (
          <>{timerComponents} übrig</>
        ) : (
          <span>Anmeldephase vorbei</span>
        )}{' '}
      </div>
      <a href={`${registrationURL}`} className="registration__link">
        Jetzt anmelden!
      </a>
    </div>
  );
};

export default Registration;
