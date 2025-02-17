import React from "react";
import { Skeleton } from "@mui/material";

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="border-2 border-gray-300 rounded-xl p-4">
          {/* Image Skeleton */}
          <div className="relative w-full h-64 mb-4">
            <Skeleton variant="rectangular" width="100%" height="100%" className="rounded-md" />
          </div>

          {/* Text & Button Skeleton */}
          <div className="text-center">
            <Skeleton variant="text" sx={{ fontSize: "1.5rem", width: "80%", margin: "0 auto" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", width: "90%", margin: "0 auto" }} />
            <Skeleton variant="rounded" width="60%" height={40} className="mt-4 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}
