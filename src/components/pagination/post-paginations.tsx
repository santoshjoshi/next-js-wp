import {Pagination, PaginationItemType, PaginationItemRenderProps, cn,} from "@nextui-org/react";
import {IconChevronRight,IconChevronLeft } from "@tabler/icons-react";
 
 
  export default function PostPagination({
    totalItems,
    itemsPerPage,
    page,
    onChange,
  }: {
    totalItems: number;
    itemsPerPage: number;
    page: number;
    onChange: (page: number) => void;
  }) {
    const renderItem = ({
      ref,
      key,
      value,
      isActive,
      onNext,
      onPrevious,
      setPage,
      className,
    }: PaginationItemRenderProps) => {
      if (value === PaginationItemType.NEXT) {
        return (
          <button
            key={key}
            className={cn(
              className,
              "h-auto min-h-0 min-w-0 gap-3 rounded-xl bg-zinc-700/70 px-2 py-2  font-medium tabular-nums antialiased hover:bg-zinc-600 active:bg-zinc-500"
            )}
            onClick={onNext}
          >
           <IconChevronRight />
          </button>
        );
      }
  
      if (value === PaginationItemType.PREV) {
        return (
          <button
            key={key}
            className={cn(
              className,
              "h-auto min-h-0 min-w-0 gap-3 rounded-xl  px-2 py-2 font-medium tabular-nums antialiased "
            )}
            onClick={onPrevious}
          >
            <IconChevronLeft />
          </button>
        );
      }
  
      if (value === PaginationItemType.DOTS) {
        return (
          <button key={key} className={className}>
            ...
          </button>
        );
      }
  
      // cursor is the default item
      return (
        <button
          key={key}
          ref={ref}
          className={cn(
            className,
            isActive
              ? " h-auto min-h-0 min-w-0 gap-3 rounded-xl"
              : " h-auto min-h-0 min-w-0 gap-3 rounded-xl"
          )}
          onClick={() => setPage(value)}
        >
          {value}
        </button>
      );
    };
  
    return (
      <Pagination
        disableCursorAnimation
        showControls
        total={Math.ceil(totalItems / itemsPerPage)}
        initialPage={1}
        className="gap-2 text-center"
        renderItem={renderItem}
        variant="light"
        onChange={onChange}
        page={page}
      />
    );
  }