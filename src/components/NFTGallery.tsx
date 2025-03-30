import { useEffect, useState } from "react";
import { NFT } from "@/types/NFT";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NFTGallerySkeleton from "./NFTGallerySkeleton";
import { Button } from "@/components/ui/button";
import { Wallet, Search } from "lucide-react";
import ViewModeButtons from "./ViewModeButtons";
import { Input } from "@/components/ui/input";

interface NFTGalleryProps {
  tokenMetadataNFTs: NFT[];
  coreAssets: NFT[];
  isWalletConnected: boolean;
}

type ViewMode = "large" | "small" | "list";

export default function NFTGallery({
  tokenMetadataNFTs,
  coreAssets,
  isWalletConnected,
}: NFTGalleryProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("large");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (
      isWalletConnected &&
      (tokenMetadataNFTs.length > 0 || coreAssets.length > 0)
    ) {
      setIsLoading(false);
    }
  }, [isWalletConnected, tokenMetadataNFTs, coreAssets]);

  if (!isWalletConnected) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-muted-foreground mt-40">
        <Wallet className="h-16 w-16" />
        <p className="text-3xl font-semibold">
          Connect your wallet to view your NFTs
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <NFTGallerySkeleton viewMode={viewMode} />;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center w-full">
        <ViewModeButtons viewMode={viewMode} setViewMode={setViewMode} />

        {/* Search bar */}
        <div className="flex items-center w-1/2 mx-1">
          <Input
            placeholder="Search NFTs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-r-none"
          />
          <Button
            variant="outline"
            size="icon"
            className="rounded-l-none border-l-0 bg-transparent"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Dialog Trigger for NFT Minter */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <p>Mint New NFT</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="px-2 pt-0 pb-0.5 bg-secondary/50 backdrop-blur-md">
            <DialogHeader>
              <DialogTitle hidden={true}>Mint a New NFT</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
