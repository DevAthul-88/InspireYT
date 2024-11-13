import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import SearchInput from "@/components/descriptiongenerator/SearchInput";




export const metadata = constructMetadata({
  title: "Description Generator – InspireYT",
  description: "Generate youtube video description.",
});

export default async function page() {
  const user = await getCurrentUser();
 
  return (
    <>
      <DashboardHeader
        heading="Description Generator"
      />
 
      <SearchInput />

    </>
  );
}
