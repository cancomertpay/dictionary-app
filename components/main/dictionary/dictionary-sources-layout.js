import Image from "next/image";

function DictionarySourcesLayout({ sourceUrls }) {
  return (
    <div className="my-6">
      <h4 className="text-neutral-grey text-xs underline underline-offset-4 mb-2">
        Source
      </h4>
      {sourceUrls.map((url, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity duration-200"
        >
          <a
            className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
            href={url}
            target="_blank"
          >
            {url}
            <div className="hover:animate-bounce">
              <Image
                src="images/icon-new-window.svg"
                alt="New window icon"
                width={14}
                height={14}
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default DictionarySourcesLayout;
