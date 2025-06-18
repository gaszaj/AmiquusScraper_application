import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LoginPromptModal({ open, onClose }: Props) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={() => window.location.href = "/register"}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("loginPrompt.title")}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          {t("loginPrompt.description")}
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={() => (window.location.href = "/register")}>
            {t("loginPrompt.register")}
          </Button>
          <Button onClick={() => (window.location.href = "/login?redirect=setup-alerts")}>
            {t("loginPrompt.login")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
