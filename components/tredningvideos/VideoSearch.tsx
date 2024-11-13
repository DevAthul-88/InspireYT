"use client"

import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import countryList from 'react-select-country-list';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import VideoCard from './VideoCard';

// Define the validation schema using Zod
const FormSchema = z.object({
    keyword: z.string().min(2, {
        message: "Keyword must be at least 2 characters long.",
    }),
    country: z.string().nonempty({
        message: "You must select a country."
    })
});


function VideoSearch() {
    const options = useMemo(() => countryList().getData(), []);
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState<null | Array>(null);

    // Setup React Hook Form with Zod validation
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            keyword: '',
            country: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const API_KEY : any = process.env.NEXT_PUBLIC_API_KEY;
        const API_URL = 'https://www.googleapis.com/youtube/v3/search';

        const params = new URLSearchParams({
            part: 'snippet',
            q: data.keyword,
            regionCode: data.country,
            maxResults: '15',
            type: 'video',
            eventType: 'completed',
            key: API_KEY,
        });

        try {
            setLoading(true); // Set loading to true before starting fetch
            const response = await fetch(`${API_URL}?${params}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const searchData = await response.json();
            const videoIds = searchData.items.map(item => item.id.videoId);

            // Now fetch video details using their IDs
            if (videoIds.length > 0) {
                const videos = await fetchVideoDetails(videoIds);

                // Now get channel details from the videos
                const channelIds = [...new Set(videos.map(video => video.snippet.channelId))];
                const channels = await fetchChannelDetails(channelIds);

                // Combine video and channel details
                const videoWithChannels = videos.map(video => ({
                    ...video,
                    channel: channels.find(channel => channel.id === video.snippet.channelId),
                }));

                setVideos(videoWithChannels);
            }

        } catch (error) {
            console.error('Error searching for videos:', error);
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    };
    

    const fetchVideoDetails = async (videoIds) => {
        const API_KEY : any = process.env.NEXT_PUBLIC_API_KEY;
        const API_URL = 'https://www.googleapis.com/youtube/v3/videos';
    
        const params = new URLSearchParams({
            part: 'snippet,contentDetails,statistics',
            id: videoIds.join(','), // Join IDs into a comma-separated string
            key: API_KEY,
        });
    
        try {
            const response = await fetch(`${API_URL}?${params}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const videoData = await response.json();
            return videoData.items; // Returns an array of video details
        } catch (error) {
            console.error('Error fetching video details:', error);
            return [];
        }
    };

    const fetchChannelDetails = async (channelIds) => {
        const API_KEY : any = process.env.NEXT_PUBLIC_API_KEY;
        const API_URL = 'https://www.googleapis.com/youtube/v3/channels';
    
        const params = new URLSearchParams({
            part: 'snippet,statistics',
            id: channelIds.join(','), // Join IDs into a comma-separated string
            key: API_KEY,
        });
    
        try {
            const response = await fetch(`${API_URL}?${params}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const channelData = await response.json();
            return channelData.items; // Returns an array of channel details
        } catch (error) {
            console.error('Error fetching channel details:', error);
            return [];
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
                                    <FormLabel>Keyword</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter keyword or search term" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.keyword?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />

                        {/* Country Select with validation */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="flex-grow min-w-[180px]">
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => form.setValue('country', value)}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {options.map((e, key) => (
                                                        <SelectItem key={key} value={e.value}>
                                                            {e.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage>
                                        {form.formState.errors.country?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex-shrink-0 mt-4">
                        <Button type="submit" disabled={loading} className={loading ? "opacity-50" : ""}>
                            {loading ? 'Loading...' : 'Search'}
                        </Button>
                    </div>

                </form>
            </Form>

            {videos == null ? <>
                <EmptyPlaceholder className='mt-6'>
                    <EmptyPlaceholder.Icon name="empty" />
                    <EmptyPlaceholder.Title>Start Your Search!</EmptyPlaceholder.Title>
                    <EmptyPlaceholder.Description>
                        Looking for something specific? Enter a keyword or select a country to find trending videos. Discover new content and stay updated with the latest trends!
                    </EmptyPlaceholder.Description>
                </EmptyPlaceholder>
            </> : <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {videos.map((e, index) => (
                        <VideoCard
                            key={index} // Add a unique key for each item
                            name={e?.snippet?.title}
                            duration={e?.contentDetails?.duration}
                            channelName={e?.snippet?.channelTitle}
                            thumbnail={e?.snippet?.thumbnails?.medium?.url}
                            views={e?.statistics?.viewCount}
                            createdAt={e?.snippet?.publishedAt}
                            videoId={e.id}
                        />
                    ))}
                </div>
            </div>}

        </div>
    );
}

export default VideoSearch;
