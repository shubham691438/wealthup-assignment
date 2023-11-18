
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center">
      <h1 className='pt-5 text-black font-[600] text-4xl md:text-5xl lg:text-6xl leading-8 md:leading-10 lg:leading-12'>FullStack Web Dev Internship Assignment</h1>
      <div className='mt-[100px] flex flex-col justify-center items-center'>
      
            <Link href="/uiDesign"><button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Task1- UI Design </button></Link>
         
            <Link href="/code"><button className="mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Task2 API</button></Link>
          
      </div>
      
      
    </main>
  );
}
