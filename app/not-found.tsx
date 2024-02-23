"use client";

import Footer from "@/components/footer";
import StatusBar from "@/components/status-bar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="mt-3 mx-auto max-w-[1000px] px-3 text-center">
        <div className="max-w-[800px] mx-auto">
          <StatusBar />
        </div>
        <div className="grid py-10">
          <h1 className="text-2xl font-bold mb-4">404 — Not Found</h1>
          <h2 className="text-base px-3">
            Sorry, I don&apos;t have what you&apos;re looking for. <br /> But I
            do have this photo of Gojo Satoru and Geto Suguru {":)"}
          </h2>
          <div className="w-5/6 mx-auto my-4">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/gojo-geto.jpeg"
                width={1400}
                height={788}
                alt="Image"
                className="rounded-2xl object-cover max-w-full"
              />
            </AspectRatio>
          </div>
          <Link href={"/"} className="text-primary">
            Back Home
          </Link>
          <Footer />
        </div>
      </div>
    </>
  );
}
