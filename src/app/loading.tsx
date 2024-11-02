import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <CircularProgress
      className="mx-auto"
      classNames={{
        svg: "w-20 h-20",
      }}
      aria-label="Loading page..."
    />
  );
}