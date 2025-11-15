"use client";

import { Button } from "@/components/ui";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
            <FaceFrownIcon className="w-14 h-14 text-red-700 mb-2" />
            {/* Small Title */}
            <p className="text-gray-500 text-sm mb-2">404 Not Found</p>

            {/* Main Heading */}
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                Oops! Page Not Found
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-md mb-6">
                The page you are looking for doesn’t exist. Click the button below to go to the homepage.
            </p>

            {/* Button */}
            <Button onClick={() => { router.push("/login") }} className="px-6 py-2">
                Go to Homepage
            </Button>
        </div>
    );
}
