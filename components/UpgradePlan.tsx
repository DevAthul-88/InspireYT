import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BatteryWarning } from "lucide-react";
import Link from "next/link";

export default function UpgradePlan() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
    <Card className="w-full max-w-md mx-auto border-none">
      <CardContent className="flex flex-col items-center justify-center space-y-6 text-center p-8">
        <div className="rounded-full bg-muted p-4">
          <BatteryWarning className="w-6 h-6 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">Upgrade Required</h2>
        <p className="text-sm text-muted-foreground">
          Please upgrade your plan to access this page and enjoy advanced tools that enhance your experience.
        </p>
        <Link href="/pricing">
          <Button className="mt-4 px-6 py-2">
            Upgrade Plan
          </Button>
        </Link>
      </CardContent>
    </Card>
  </div>
  );
}
