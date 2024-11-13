import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import VideoSearch from "@/components/tredningvideos/VideoSearch";


export const metadata = constructMetadata({
  title: "Trending Videos – InspireYT",
  description: "Create and manage content.",
});

export default async function page() {
  const user = await getCurrentUser();



  return (
    <>
      <DashboardHeader
        heading="Trending Videos"
      />

      <VideoSearch />
    </>
  );
}
