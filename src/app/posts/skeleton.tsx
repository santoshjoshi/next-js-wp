import { Skeleton, Divider, Card} from "@nextui-org/react";

function PostsSkeleton() {
    const isLoaded = true
  return (
      <>
            {[1, 2, 3].map((index) => (
                <div className="w-full"  key={index}>
           <Card key={index} className="w-full space-y-4 p-4" radius="lg">
          
          <div className="flex flex-col space-y-2">
            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
              <div className="h-5 w-full rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <Divider />

          <Skeleton isLoaded={isLoaded} className="space-y-2">
            <div className="h-20 w-4/5 rounded-lg bg-slate-200"></div>
            
          </Skeleton>

          <div className="flex flex-wrap gap-2 mt-4">
            {[1, 2, 3].map((tagIndex) => (
              <Skeleton key={tagIndex} isLoaded={isLoaded} className="w-20 h-6 rounded-md bg-[#e3f2ff]">
                <div className="h-8 w-full bg-[#e3f2ff] rounded-md"></div>
              </Skeleton>
            ))}
          </div>

          <Divider />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
               <Skeleton className="flex rounded-full w-12 h-12"/>
              <div className="flex flex-col">
                <Skeleton isLoaded={isLoaded} className="w-24 rounded-lg">
                  <div className="h-3 w-full rounded-lg "></div>
                </Skeleton>
                <Skeleton isLoaded={isLoaded} className="w-16 mt-1 rounded-lg">
                  <div className="h-3 w-full rounded-lg "></div>
                </Skeleton>
              </div>
            </div>
            <Skeleton isLoaded={isLoaded} className="w-20 rounded-lg">
              <div className="h-8 w-full rounded-lg"></div>
            </Skeleton>
          </div>
        </Card>
        </div>
      ))}
    </>
  );
}

export default PostsSkeleton;
