"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Skeleton } from '../ui/skeleton';
import TagsDisplay from './TagsDisplay'; // Update this component to display the tags
import { useToast } from '../ui/use-toast';

// Define the validation schema using Zod
const FormSchema = z.object({
    keyword: z.string().min(2, {
        message: "Video idea must be at least 2 characters long.",
    }),
});

interface TagsInterface {
    tags: string[]; // Tags will be a list of strings
}

function SearchInput() {
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState<null | TagsInterface>(null);
    const { toast } = useToast()
    // Setup React Hook Form with Zod validation
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            keyword: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        setLoading(true);
        try {
            const response = await fetch('/api/tags', {  // Assuming your API for tags is `/api/tags`
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: data?.keyword  // Send the user keyword to generate tags
                }),
            });

            const data1 = await response.json();
            setLoading(false);
            setTags(data1); // Parse the returned tags
            
        } catch (error) {
            
            setLoading(false);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong please try again later",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap gap-4 items-center w-full">
                        {/* Keyword Input with validation */}
                        <FormField
                            control={form.control}
                            name="keyword"
                            render={({ field }) => (
                                <FormItem className="flex-grow min-w-[180px]">
                                    <FormLabel>Tell us about your channel is about</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. How to drive a car?" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.keyword?.message}
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
                    tags && <TagsDisplay tags={tags?.tags} />  // Display the generated tags
                )}
            </div>
        </div>
    );
}

export default SearchInput;
