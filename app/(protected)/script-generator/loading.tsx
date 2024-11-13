import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLoading() {
  return (
    <>
      <DashboardHeader heading="Script Generator" />
      <Skeleton className="size-full rounded-lg" />
    </>
  );
}
