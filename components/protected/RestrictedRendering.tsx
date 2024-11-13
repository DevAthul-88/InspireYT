"use client"

import React from 'react'
import UpgradePlan from '../UpgradePlan'
import { usePathname } from 'next/navigation';

async function RestrictedRendering({ children, user, userSubscriptionPlan }) {
    const pathname = usePathname();

    // Define the routes where the UpgradePlan should NOT be rendered
    const ignoredRoutes = [
        "/dashboard",
        "/dashboard/billing",
        "/dashboard/settings",
        "/ideas-generator",
        "/trending-videos",
    ];

    const shouldIgnoreUpgradePlan = ignoredRoutes.includes(pathname);

    return (
        <div>
            {userSubscriptionPlan.title === "Starter" && !shouldIgnoreUpgradePlan ? (
                <UpgradePlan />
            ) : (
                <>{children}</>
            )}
        </div>
    )
}

export default RestrictedRendering