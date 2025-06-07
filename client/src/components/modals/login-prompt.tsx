
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LoginPromptModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={() => window.location.href = "/register"}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login Required</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          You must be logged in to continue. Please log in or register.
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={() => (window.location.href = "/register")}>
            Register
          </Button>
          <Button onClick={() => (window.location.href = "/login?redirect=setup-alerts")}>
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
