"use client";
import { useState } from "react";
import { TextInput, SelectInput } from "@/components/form/inputs";
import { Button } from "@/components/form/buttons";
import Spinner from "@/components/animated/spinners";

export default function Form({ data, className, ...props }) {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    course: "",
    project: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const courses = Object.keys(data).map((key) => {
    return {
      label: data[key].name,
      value: data[key].id,
    };
  });

  const handleCourseChange = (e) => {
    setFormData({ ...formData, course: e.target.value });
    setProjects(
      data[e.target.value].projects.map((project) => {
        return {
          label: project.position + " - " + project.name,
          value: project.id,
        };
      })
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("http://api.localhost:8000/reports/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`} {...props}>
      <SelectInput
        label="Parcours"
        options={courses}
        value={formData.course}
        onChange={handleCourseChange}
        className="w-full"
      />
      <SelectInput 
        label="Projet" 
        options={projects} 
        disabled={projects.length === 0}
        value={formData.project}
        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
        placeholder={projects.length === 0 ? "Sélectionnez un parcours d'abord" : ""}
        className="w-full" />
      <TextInput 
        type="textarea"
        label="Informations à mentionner"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        placeholder="Renseignez les informations que vous voulez intégrer au compte-rendu"
        rows="20"
         />
        <Button 
            onClick={handleSubmit}
            className="w-full h-10 text-white flex justify-center items-center">
            {loading ? <Spinner className="size-6" spinnerColor="white" /> : "Générer le rapport"}
        </Button>
    </div>
  );
}
