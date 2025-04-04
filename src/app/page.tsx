"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { fetchTokenMetadataAssets } from "@/lib/fetchTokenMetadataAssets";
import { fetchCoreAssets } from "@/lib/fetchCoreAssets";
import NFTGallery from "@/components/NFTGallery";
import { NFT } from "@/types/NFT";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Particles } from "@/components/magicui/particles";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {
  const { publicKey, wallet } = useWallet();
  const [tokenMetadataAssets, setTokenMetadataAssets] = useState<NFT[]>([]);
  const [coreAssets, setCoreAssets] = useState<NFT[]>([]);

  useEffect(() => {
    if (wallet && publicKey) {
      // Fetch Token Metadata NFTs
      fetchTokenMetadataAssets(publicKey, wallet.adapter).then(
        setTokenMetadataAssets
      );
      // Fetch Core Assets
      fetchCoreAssets(publicKey, wallet.adapter).then(setCoreAssets);
    }
  }, [wallet, publicKey]);

  return (
    <div>
      <header className="flex items-center justify-between w-full">
        <div className="relative z-10 w-full flex justify-between px-4 md:px-12 py-2 mx-auto bg-gradient-to-br from-primary/20 to-secondary/50 backdrop-blur">
          <div className="flex items-center space-x-3 container">
            <SparklesText
              text="Nebulart"
              className="text-2xl"
              sparklesCount={5}
            />
          </div>
          <div>
            <WalletMultiButton />
          </div>
        </div>
      </header>

      <div className="container mx-auto py-3">
        <NFTGallery
          tokenMetadataNFTs={tokenMetadataAssets}
          coreAssets={coreAssets}
          isWalletConnected={!!wallet && !!publicKey}
        />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
}
