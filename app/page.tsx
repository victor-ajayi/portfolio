import Bio from "@/components/bio";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Moodboard from "@/components/moodboard";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import StatusBar from "@/components/status-bar";

export default function Page() {
  return (
    <div className="flex flex-col mt-3 mx-auto max-w-[800px] px-3 md-custom:px-10 min-h-[95vh]">
      <StatusBar />
      <main className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 flex flex-col justify-center gap-3 md:flex-row">
          <Bio />
          <Stack />
        </div>
        <Projects />
        <Moodboard />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
