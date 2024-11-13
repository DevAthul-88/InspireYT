'use client'

import { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import Markdown from 'react-markdown'

interface ScriptDisplayProps {
  scriptText: string;
}

export default function ScriptDisplay({ scriptText }: ScriptDisplayProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(scriptText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    })
  }, [scriptText])

  return (
    <div className="w-full mx-auto space-y-4">
      <div className="p-4 bg-secondary rounded-lg">
        <div className='content'>
        <Markdown>{scriptText}</Markdown>
        </div>
        <Button
          size="icon"
          onClick={handleCopy}
          aria-label="Copy script text"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}
