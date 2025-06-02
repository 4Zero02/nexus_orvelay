import ComponentTest from "@/components/componentTest";
import ScorePanel from "@/components/scorePanel";
import TeamNameInput from "@/components/teamNameInput";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Painel de Controle
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <TeamNameInput label="Time 1" />
          <ScorePanel team="Time 1" />
        </div>
        <div>
          <TeamNameInput label="Time 2" />
          <ScorePanel team="Time 2" />
        </div>
      </div>
      <div className="mt-8">
        <div>
          <ComponentTest/>
        </div>
      </div>
    </div>
  );
}
