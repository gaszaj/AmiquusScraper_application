import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WaitlistPromptModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={() => window.location.href = "/waitlist"}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          We're currently at full capacity. Join the waitlist to be notified when a slot becomes available.
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <Button onClick={() => (window.location.href = "/waitlist")}>
            Join Waitlist
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
