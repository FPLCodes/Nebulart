"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between w-full">
        <div className="w-full flex justify-between px-4 md:px-12 py-2 mx-auto bg-gradient-to-br from-primary/20 to-secondary/50">
          <div className="flex items-center space-x-3 container">
            <h1 className="text-xl font-semibold">Nebulart</h1>
          </div>
          <div>
            <WalletMultiButton />
          </div>
        </div>
      </header>
    </div>
  );
}
