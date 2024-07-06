import { storage } from "./assets";

function App() {
  return (
    <>
      <div class="bg-blue-500 small:bg-red-500 xs:bg-slate-500 sm:bg-blue-600 md:bg-green-700 lg:bg-black xl:bg-red-800 2xl:bg-orange-400 3xl:bg-green-700 4xl:bg-amber-800 5xl:bg-gray-500 text-white">
        This div changes color based on screen size.
        <img src={storage} alt="storage" />
      </div>
    </>
  );
}

export default App;
