const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      <p className="text-2xl mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
