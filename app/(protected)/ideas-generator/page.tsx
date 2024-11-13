import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import SearchInput from "@/components/ideasgenerator/SearchInput";


export const metadata = constructMetadata({
  title: "Ideas Generator – InspireYT",
  description: "Generate youtube video ideas.",
});

export default async function page() {
  const user = await getCurrentUser();



  return (
    <>
      <DashboardHeader
        heading="Ideas Generator"
      />
      <SearchInput />

    </>
  );
}
