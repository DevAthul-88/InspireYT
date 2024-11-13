import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import SearchInput from "@/components/scriptwriter/SearchInput";


export const metadata = constructMetadata({
  title: "Script Generator – InspireYT",
  description: "Generate youtube video script.",
});

export default async function page() {
  const user = await getCurrentUser();



  return (
    <>
      <DashboardHeader
        heading="Script Generator"
      />

      <SearchInput />

    </>
  );
}
