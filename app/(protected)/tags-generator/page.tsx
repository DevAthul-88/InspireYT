import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import SearchInput from "@/components/tagsgenerator/SearchInput";



export const metadata = constructMetadata({
  title: "Tags Generator – InspireYT",
  description: "Generate youtube video tags.",
});

export default async function page() {
  const user = await getCurrentUser();



  return (
    <>
      <DashboardHeader
        heading="Tags Generator"
      />

      <SearchInput />

    </>
  );
}
