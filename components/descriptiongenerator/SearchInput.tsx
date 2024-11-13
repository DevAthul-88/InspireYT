"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from '../ui/skeleton';
import TitleList from './DescriptionList';



// Define the validation schema using Zod
const FormSchema = z.object({
    topic: z.string().min(2, {
        message: "Video topic must be at least 2 characters long.",
    }),
    keywords: z.string().optional(), // Make keywords optional if desired
});

interface IdeasInterface {
    ideas: string[];
};

function SearchInput() {
    const [loading, setLoading] = useState(false);
    const [ideas, setIdeas] = useState<null | IdeasInterface>(null);

    // Setup React Hook Form with Zod validation
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            topic: '',
            keywords: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        setLoading(true);
        try {
            const response = await fetch('/api/description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: data.topic,
                    keywords: data.keywords // Include keywords in the request
                }),
            });

            const data1 = await response.json();
            setLoading(false);
            setIdeas(data1); // Use the response directly since it's already JSON

        } catch (error) {
            setLoading(false);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-center w-full">
                        {/* Textarea for Video Topic */}
                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem className="flex-grow min-w-[180px]">
                                    <FormLabel>Video Topic</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="e.g. The best car for beginners." {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.topic?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />

                        {/* Input for Keywords */}
                        <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem className="flex-grow min-w-[180px]">
                                    <FormLabel>Enter keywords (optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. driving, tips, cars" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.keywords?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="flex-shrink-0 mt-4">
                        <Button type="submit" disabled={loading} className={loading ? "opacity-50" : ""}>
                            {loading ? 'Loading...' : 'Generate'}
                        </Button>
                    </div>
                </form>
            </Form>

            <div className="mt-6">
                {loading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[450px]" />
                        <Skeleton className="h-4 w-[400px]" />
                    </div>
                ) : (
                    ideas !== null && <TitleList textItems={ideas?.ideas} />
                )}
            </div>
        </div>
    );
}

export default SearchInput;
