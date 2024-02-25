import Generator from "@/app/dashboard/generator";

async function getProjectsData() {
    let response = await fetch(process.env.API_URL + "/courses/")
    response = await response.json();

    let data = {};
    response.forEach(course => {
        data[course.id] = course;
    });
    return data

}

export default async function page() {
    const data = await getProjectsData();

    return (
        <main className="flex-1 flex flex-col items-center p-10 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-16">
                Générateur de Rapport d&apos;évaluation
            </h1>
            <div className="w-full h-full">
                <Generator data={data} />
            </div>
        </main>
    );
}

