"use client";

import Footer from "@/components/footer";
import StatusBar from "@/components/status-bar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-3 mx-auto max-w-[800px] px-3 md-custom:px-10">
      <StatusBar />
      <div className="mt-8 max-w-[1000px] text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Not Found</h1>
        <h2 className="text-base px-3">
          Sorry, I don&apos;t have what you&apos;re looking for. <br /> But I do
          have this photo of Gojo Satoru and Geto Suguru {":)"}
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
  );
}
