"use client"
import type { JSX } from 'react';

interface Props {
    angle?: number;
}

const Corner = ({ angle = 1 }: Props): JSX.Element => {
    return (
        <div className="relative size-6 top-0 left-0"
        style={{ transform: `rotate(${90 * angle}deg)` }}>
            <div className="bg-black h-6 w-1" />
            <div className="bg-black h-1 w-6" />
        </div>
    )

}
export default Corner