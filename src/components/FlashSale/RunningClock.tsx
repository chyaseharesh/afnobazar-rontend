import React, { useState, useEffect } from "react";
import "@/app/css/clock.css";

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        // Set the target date (e.g., 5 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);

        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
                    .toString()
                    .padStart(2, "0");
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
                    .toString()
                    .padStart(2, "0");
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                )
                    .toString()
                    .padStart(2, "0");
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
                    .toString()
                    .padStart(2, "0");

                setCountdown({ days, hours, minutes, seconds });
            } else {
                // Countdown has ended
                setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                clearInterval(intervalId); // Stop the timer once the countdown is complete
            }
        };

        // Update countdown every second
        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initialize immediately

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="countdown-container flex flex-wrap gap-5 -mt-1">
            <div>
                <p className="text-gray-700 text-xs">Days</p>
                <p className="text-gray-800 font-bold text-5xl">{countdown.days}</p>
            </div>
            <div className="text-5xl font-bold text-orange-500 mt-3">:</div>
            <div>
                <p className="text-gray-700 text-xs">Hours</p>
                <p className="text-gray-800 font-bold text-5xl">{countdown.hours}</p>
            </div>
            <div className="text-5xl font-bold text-orange-500 mt-3">:</div>
            <div>
                <p className="text-gray-700 text-xs">Minutes</p>
                <p className="text-gray-800 font-bold text-5xl">{countdown.minutes}</p>
            </div>
            <div className="text-5xl font-bold text-orange-500 mt-3">:</div>
            <div>
                <p className="text-gray-700 text-xs">Seconds</p>
                <p className="text-gray-800 font-bold text-5xl">{countdown.seconds}</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
