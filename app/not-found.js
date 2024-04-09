function NotFoundPage() {
  return (
    <div className="text-center flex flex-col items-center justify-center mt-[10%] w-full gap-5">
      <span className="text-[70px] mb-[2%]">&#128565;</span>
      <p className="bold text-xl">No Definitions Found</p>
      <p className="text-neutral-grey">
        Sorry pal, we couldn&apos;t find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFoundPage;
