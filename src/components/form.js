"use client"
import { useState } from "react";
import { TextInput, SelectInput } from "@/components/form/inputs";


export default function Form({ data }) {
    const [projects, setProjects] = useState([]);

    const courses = Object.keys(data).map(key => {
        return {
            label: data[key].name,
            value: key
        }
    }
    );

    const handleCourseChange = (e) => {
        setProjects(courses[e.target.value].projects.map(project => {
            return {
                label: project.name,
                value: project.id
            }
        })
        );
    }
  return (
    <form className="flex flex-col gap-4">
      <SelectInput label="Parcours" options={courses} onChange={handleCourseChange} />
      <SelectInput
        label="Projet"
        options={projects}
      />
      <TextInput type="textarea" label="Notes" placeholder="Nom" />
    </form>
  );
}
