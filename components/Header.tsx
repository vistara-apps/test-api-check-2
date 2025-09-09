'use client';

import { useMiniKit } from '@coinbase/minikit';

export function Header() {
  const { context } = useMiniKit();
  
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Counter Mini App
      </h1>
      <p className="text-gray-600 text-lg">
        Simple counter built for Base
      </p>
      {context?.user?.displayName && (
        <p className="text-sm text-gray-500 mt-2">
          Welcome, {context.user.displayName}!
        </p>
      )}
    </header>
  );
}
