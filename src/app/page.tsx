import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function LandingPage() {
  return <div className="w-full">
    <section id="hero" className="h-64 w-full bg-gray-900 py-6">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl max-w-md font-bold font-sans">Manage your Business with ease.</h1>
          <p className="text-lg font-normal">Leave the headache to us.</p>
        </div>
        <div>
          <Image src={'/vercel.svg'} width={200} height={200} alt="Vercel Logo" />
        </div>
      </div>
    </section>

    <section id="cta" className="h-64 w-full bg-slate-950 py-6">
      <div className="h-full max-w-5xl mx-auto flex justify-center items-center gap-8">
        <Link href={'/user'}>
          <Button className="py-5 px-7 text-lg cursor-pointer">Register New User</Button>
        </Link>
        <Link href={'/user'}>
          <Button className="py-5 px-7 text-lg cursor-pointer">Login User</Button>
        </Link>


        <Link href={'/admin'}>
          <Button className="py-6 px-9 text-lg cursor-pointer" variant={'outline'}>Login Admin</Button>
        </Link>
      </div>
    </section>
  </div>
}
