import Image from "next/image";
import Link from "next/link";


const Banar = () => {
    return (
      
    <div className="relative bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-gray-700 dark:to-slate-800 py-16 md:py-24 px-6 md:px-12 rounded-md my-6 overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side:Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase bg-indigo-100/60 dark:bg-indigo-900/40 px-3 py-1.5 rounded-full">
            Knowledge Awaits You
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-950 dark:text-white leading-tight tracking-tight">
            Find Your Next <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">Great Read</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            Dive into a vast world of knowledge, stories, and innovations. <br />
            Discover handpicked books tailored to fuel your curiosity and passion. <br />
            Start your journey today and unlock the ultimate reading experience.
          </p>
        
          <div className="pt-2">
            <Link 
              href="/all-books" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Browse Now
            </Link>
          </div>
        </div>

        {/* Right Side: Group Reading Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative max-w-md w-full h-auto rounded-md overflow-hidden shadow-2xl shadow-indigo-950/10 border-2 border-white dark:border-gray-500 transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <Image src={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'}  width={1200} height={800} alt="laibary">
                 
             </Image>
          </div>
        </div>

      </div>
    </div>
 
    );
};

export default Banar;