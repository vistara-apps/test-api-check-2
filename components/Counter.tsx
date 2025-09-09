'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Count
          </h2>
          <div className="text-6xl font-bold text-primary-600 mb-2">
            {count}
          </div>
          <div className="text-sm text-gray-500">
            {count === 0 ? 'Start counting!' : 
             count > 0 ? `+${count} from start` : 
             `${count} from start`}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3 justify-center">
            <button
              onClick={decrement}
              className="btn btn-secondary text-xl w-16 h-16 rounded-full flex items-center justify-center"
              aria-label="Decrease count"
            >
              −
            </button>
            <button
              onClick={increment}
              className="btn btn-primary text-xl w-16 h-16 rounded-full flex items-center justify-center"
              aria-label="Increase count"
            >
              +
            </button>
          </div>
          
          <button
            onClick={reset}
            className="btn btn-secondary w-full"
            disabled={count === 0}
          >
            Reset to 0
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-500">Min</div>
              <div className="font-semibold text-gray-800">
                {Math.min(0, count)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Max</div>
              <div className="font-semibold text-gray-800">
                {Math.max(0, count)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Steps</div>
              <div className="font-semibold text-gray-800">
                {Math.abs(count)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
