export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 pt-20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
          <div className="w-8 h-8 border-3 border-accent-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
          Loading...
        </h2>
        <p className="text-neutral-600">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
