interface PaginatorProps {
  pagesCount: number;
  currentPageIndex: number;
  onPageClick: (index: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ pagesCount, currentPageIndex, onPageClick }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: pagesCount }, (_, index) => (
        <span
          key={index}
          className={`dot w-2 h-2 rounded-full mx-1 ${
            index === currentPageIndex ? "bg-blue-500" : "bg-gray-400"
          } cursor-pointer`}
          onClick={() => onPageClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Paginator;
