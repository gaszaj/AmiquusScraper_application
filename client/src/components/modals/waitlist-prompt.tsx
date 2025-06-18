import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WaitlistPromptModal({ open, onClose }: Props) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={() => window.location.href = "/waitlist"}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("waitlistPrompt.title")}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          {t("waitlistPrompt.description")}
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <Button onClick={() => (window.location.href = "/waitlist")}>
            {t("waitlistPrompt.button")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
