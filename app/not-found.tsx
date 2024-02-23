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
          <h2 className="text-base">
            Sorry, I don&apos;t have what you&apos;re looking for {":("}
          </h2>
          <div className="mt-2">
            But I do have this photo of Gojo Satoru and Geto Suguru {":)"}
          </div>
          <div className="w-[800px] mx-auto my-4">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/gojo-geto.jpeg"
                width={1400}
                height={788}
                alt="Image"
                className="rounded-2xl object-cover"
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
