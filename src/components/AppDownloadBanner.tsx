import { Download, Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { useState } from "react";

export const AppDownloadBanner = () => {
  const { isInstallable, isInstalled, isIOS, promptInstall } = usePWAInstall();
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (isInstalled || dismissed) return null;

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
    } else if (isInstallable) {
      await promptInstall();
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Get the Travo Tedunu App</p>
              <p className="text-white/80 text-xs">Faster booking & offline access</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={handleInstallClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Download className="h-4 w-4 mr-1" />
              Install
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setDismissed(true)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* iOS Instructions Modal */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-background rounded-t-2xl sm:rounded-2xl p-6 w-full max-w-sm animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">Install on iPhone/iPad</h3>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => setShowIOSInstructions(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0">1</div>
                <p>Tap the <strong>Share</strong> button in Safari (box with arrow)</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0">2</div>
                <p>Scroll down and tap <strong>"Add to Home Screen"</strong></p>
              </div>
              <div className="flex gap-3">
                <div className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0">3</div>
                <p>Tap <strong>"Add"</strong> to install the app</p>
              </div>
            </div>
            <Button 
              className="w-full mt-6 bg-action text-action-foreground hover:bg-action-hover"
              onClick={() => setShowIOSInstructions(false)}
            >
              Got it!
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
