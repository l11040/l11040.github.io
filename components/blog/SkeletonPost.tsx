import Card from "../common/Card";

export default function SkeletonPost() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <div role="status" className="h-full w-full animate-pulse space-y-4">
          <div className="space-y-4 px-6 pt-4">
            <div className="h-10 w-[200px] rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-6 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="px-6 ">
            <div className="mb-2 mr-2 inline-block h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 mr-2 inline-block h-7 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="w-25 mb-2 mr-2 inline-block h-7 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 mr-2 inline-block h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="w-18 mb-2 mr-2 inline-block h-7 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mb-2 mr-2 inline-block h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="px-6 pb-4">
            <div className="h-5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      </Card>
      <Card className="!h-screen">
        <div role="status" className="h-full w-full animate-pulse space-y-4">
          <div className="h-10 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex h-[400px] w-full items-center justify-center rounded-md bg-gray-300 dark:bg-gray-700">
            <svg
              className="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="h-10 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex w-full items-center">
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="flex h-[400px] w-full items-center justify-center rounded-md bg-gray-300 dark:bg-gray-700">
            <svg
              className="h-10 w-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
}
