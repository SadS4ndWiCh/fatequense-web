import { Award, Rocket, Wine } from "lucide-react";

export function StudentDetails() {
  return (
    <section className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="w-fit h-fit p-4 rounded-md bg-blue-50">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-medium">Rendimento no curso</h2>
            <p className="text-sm">Média de nota do curso todo</p>
          </div>
        </div>

        <span className="text-lg font-bold">8.87</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="w-fit h-fit p-4 rounded-md bg-green-50">
            <Rocket className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="font-medium">Progressão do curso</h2>
            <p className="text-sm">Porcentagem de conclusão do curso</p>
          </div>
        </div>

        <span className="text-lg font-bold">58%</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="w-fit h-fit p-4 rounded-md bg-fuchsia-50">
            <Wine className="w-5 h-5 text-fuchsia-600" />
          </div>
          <div>
            <h2 className="font-medium">Cursados</h2>
            <p className="text-sm">Semestres efetivamente cursados</p>
          </div>
        </div>

        <span className="text-lg font-bold">3</span>
      </div>
    </section>
  );
}
