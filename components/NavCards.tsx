import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Captions, HashIcon, LayoutPanelLeft, Lightbulb, List, PaperclipIcon, TrendingUp } from "lucide-react";

const items = [
  {
    icon: LayoutPanelLeft,
    name: "Dashboard",
    description: "Get an overview of your performance metrics and insights.",
    href: "/dashboard"
  },
  {
    icon: TrendingUp,
    name: "Trending Videos",
    description: "Discover popular and trending videos to inspire your next creation.",
    href: "/trending-videos"
  },
  {
    icon: Lightbulb,
    name: "Ideas Generator",
    description: "Generate fresh content ideas tailored to your audience.",
    href: "/ideas-generator"
  },
  {
    icon: Captions,
    name: "Title Generator",
    description: "Create catchy, optimized titles for your YouTube videos.",
    href: "/title-generator"
  },
  {
    icon: PaperclipIcon,
    name: "Description Generator",
    description: "Generate video descriptions that increase engagement and visibility.",
    href: "/description-generator"
  },
  {
    icon: List,
    name: "Script Generator",
    description: "Create detailed video scripts to streamline your content creation process.",
    href: "/script-generator"
  },
  {
    icon: HashIcon,
    name: "Tags Generator",
    description: "Generate relevant tags to help your videos reach a wider audience.",
    href: "/tags-generator"
  },
];

export default function NavCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" >
      {items.map((page, index) => (
        <Link href={page.href} key={index}>
          <Card className="transition-shadow hover:shadow-lg cursor-pointer" style={{minHeight:"170px"}}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary1 p-2 text-primary-foreground">
                <page.icon className="h-6 w-6 text-white dark:text-black" />
              </div>
              <CardTitle>{page.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{page.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
