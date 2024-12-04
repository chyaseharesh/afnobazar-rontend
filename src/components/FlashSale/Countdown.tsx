import React from 'react'
import Countdown, { CountdownRenderProps, zeroPad } from "react-countdown";


const Countdowns = () => {
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div>
                    <div className="flex gap-4">
                        <div className="px-2 py-1 text-gray-700 rounded-sm flex flex-col items-center">
                            <span className="text-xs text-left leading-none">Days</span>
                            <span className=" font-bold text-4xl leading-none">
                                {zeroPad(days)}
                            </span>
                        </div>
                        <div className="mt-3">
                            <span className=" font-bold text-4xl text-orange-500">
                                :
                            </span>
                        </div>
                        <div className="px-2 py-1 text-gray-700 rounded-sm flex flex-col items-center">
                            <span className="text-xs text-left leading-none">Hours</span>
                            <span className=" font-bold text-4xl leading-none">
                                {zeroPad(hours)}
                            </span>
                        </div>
                        <div className="mt-3">
                            <span className=" font-bold text-4xl text-orange-500">
                                :
                            </span>
                        </div>
                        <div className="px-2 py-1 text-gray-700 rounded-sm flex flex-col items-center">
                            <span className="text-xs text-left leading-none">Minutes</span>
                            <span className=" font-bold text-4xl leading-none">
                                {zeroPad(minutes)}
                            </span>
                        </div>
                        <div className="mt-3">
                            <span className=" font-bold text-4xl text-orange-500">
                                :
                            </span>
                        </div>
                        <div className="px-2 py-1 text-gray-700 rounded-sm flex flex-col items-center">
                            <span className="text-xs text-left leading-none">Seconds</span>
                            <span className=" font-bold text-4xl leading-none">
                                {zeroPad(seconds)}
                            </span>
                        </div>
                    </div>
                </div>

            );
        }
    };

    return (
        <div className="mt-16">
            <div className="flex gap-2 text-lg">
                <span className="py-2 px-1 rounded-l bg-primary"></span>
                <span className="text-sm text-primary font-bold">Today&apos;s</span>
            </div>
            <div className="flex gap-4">
                <span className="text-4xl font-bold text-orange-500 mt-3">
                    Flash Sales
                </span>
                <Countdown date={Date.now() + 10800000} daysInHours={false} renderer={renderer} />,

            </div>

        </div>)
}

export default Countdowns