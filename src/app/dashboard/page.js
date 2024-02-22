import Form from "@/components/form";

async function getProjectsData() {
    let response = await fetch("http://api.localhost:8000/courses/")
    console.log(response)
    // response = await response.json();

    let data = {};
    // response.forEach(course => {
    //     data[course.id] = course;
    // });
    return data

}

export default async function page() {
    const data = await getProjectsData();

    return (
        <main className="flex-1 flex flex-col items-center p-10">
            <h1 className="text-4xl font-bold text-center">
                Générateur de Rapport d'évaluation
            </h1>
            <div className="w-full flex bg-secondary">
                <Form data={data} />
            </div>
        </main>
    );
}

