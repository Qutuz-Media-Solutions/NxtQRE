export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex w-full items-center justify-center">
      <div role="status" className="animate-[bounce_1s_infinite]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse text-9xl text-gray-200 transition-all dark:text-rose-600"
        >
          L
        </h1>
        <span className="sr-only">Loading...</span>
      </div>

      <div role="status" className="animate-[bounce_1s_infinite_0.1s]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse text-9xl text-emerald-200 transition-all dark:text-emerald-600"
        >
          O
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.2s]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse text-9xl text-stone-600 transition-all dark:text-stone-100"
        >
          A
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.3s]">
        <h1
          aria-hidden="true"
          className="textf mr-2 inline animate-pulse text-9xl text-fuchsia-200 transition-all dark:text-fuchsia-600"
        >
          D
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.4s]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse text-9xl text-sky-200 transition-all dark:text-sky-600"
        >
          I
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.5s]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse text-9xl text-yellow-200 transition-all dark:text-yellow-600"
        >
          N
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="animate-[bounce_1s_infinite_0.6s]">
        <h1
          aria-hidden="true"
          className="mr-2 inline animate-pulse fill-blue-600 text-9xl text-green-200 transition-all dark:text-green-600"
        >
          G
        </h1>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
