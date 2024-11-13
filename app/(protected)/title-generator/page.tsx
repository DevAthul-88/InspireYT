import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import SearchInput from "@/components/titlegenerator/SearchInput";



export const metadata = constructMetadata({
  title: "Title Generator – InspireYT",
  description: "Generate youtube video title.",
});

export default async function page() {
  const user = await getCurrentUser();



  return (
    <>
      <DashboardHeader
        heading="Title Generator"
      />

      <SearchInput />

    </>
  );
}
