"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface TagsDisplayProps {
  tags: string[]; // Accept tags as a prop
}

export default function TagsDisplay({ tags }: TagsDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags.map((tag, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardContent className="flex items-center justify-between pt-6">
              <p className="text-md capitalize">{tag}</p> {/* Add 'capitalize' class */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(tag, index)}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
