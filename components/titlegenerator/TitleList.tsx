'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface TextItem {
  id: string
  title: string
}


export default function TitleList({textItems}) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000) // Reset after 2 seconds
    })
  }, [])



  return (
    <div className="w-full mx-auto space-y-4">
      <ul className="space-y-3">
        {textItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
            <span className="text-sm mr-2 flex-grow">{item.title}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleCopy(item.title, item.id)}
              aria-label={`Copy text: ${item.title}`}
            >
              {copiedId === item.id ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}