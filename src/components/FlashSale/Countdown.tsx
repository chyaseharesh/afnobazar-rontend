import React from 'react'
import RunningClock from './RunningClock'


const Countdowns = () => {

    return (
        <div className="mt-16">
            <div className="flex gap-2 text-lg">
                <span className="py-2 px-1 rounded-l bg-primary"></span>
                <span className="text-sm text-primary font-bold">Today&apos;s</span>
            </div>
            <div className="flex gap-8">
                <span className="text-4xl font-bold text-orange-500 mt-3">
                    Flash Sales
                </span>
                <RunningClock />
            </div>

        </div>)
}

export default Countdowns