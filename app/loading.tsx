export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full flex justify-center items-center">
      <div role="status" className="animate-[bounce_1s_infinite]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-gray-200 transition-all animate-pulse dark:text-rose-600"
        >
          L
        </h1>
        <span className="sr-only">Loading...</span>
      </div>

      <div role="status" className="animate-[bounce_1s_infinite_0.1s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-emerald-200 transition-all animate-pulse dark:text-emerald-600"
        >
          O
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.2s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-stone-600 transition-all animate-pulse dark:text-stone-100"
        >
          A
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.3s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-fuchsia-200 transition-all animate-pulse dark:text-fuchsia-600 textf"
        >
          D
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.4s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-sky-200 transition-all animate-pulse dark:text-sky-600"
        >
          I
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.5s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-yellow-200 transition-all animate-pulse dark:text-yellow-600"
        >
          N
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.6s]">
        <h1
          aria-hidden="true"
          className="inline text-9xl mr-2 text-green-200 transition-all animate-pulse dark:text-green-600 fill-blue-600"
        >
          G
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
