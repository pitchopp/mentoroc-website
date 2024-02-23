import Form from "@/components/form";

async function getProjectsData() {
    console.log(process.env.API_URL)
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
            <h1 className="text-4xl font-bold text-center">
                Générateur de Rapport d'évaluation
            </h1>
            <div className="mt-16 flex gap-4 w-full">
                <Form data={data} className="flex-1" />
                <div className="flex-1">
                    </div>
            </div>
        </main>
    );
}

