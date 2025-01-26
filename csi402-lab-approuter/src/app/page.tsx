import Input from "./component/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="p-8 bg-slate-200 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text ">Login</h1>

        <form>
          <Input labelText="Email" inputId="textEmail"></Input>
          <Input labelText="Password" inputId="textPassword" type="password"></Input>
        </form>
        <button 
        className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200">Login</button>
      <p className="text-emerald-500 text-center mt-4 text-sm">
          Don't have an account? <Link href="/register" className="text-blue-500">Register</Link>
      </p>
      </div>
    </div>
  );
}
