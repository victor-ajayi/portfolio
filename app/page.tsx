import Bio from "@/components/bio";
import Moodboard from "@/components/moodboard";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import StatusBar from "@/components/status-bar";

export default function Page() {
  return (
    <div className="mt-3">
      <StatusBar />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 flex flex-col justify-center gap-3 md:flex-row">
          <Bio />
          <Stack />
        </div>
        <Projects />
        <Moodboard />
      </div>
    </div>
  );
}
