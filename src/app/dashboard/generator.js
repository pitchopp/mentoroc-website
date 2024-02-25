"use client";
import { useState } from "react";
import { TextInput, SelectInput } from "@/components/form/inputs";
import { Button } from "@/components/form/buttons";
import Spinner from "@/components/animated/spinners";
import { Editor } from '@tinymce/tinymce-react';

export default function Generator({ data, className, ...props }) {
  const [report, setReport] = useState("");
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

  const handleSubmit = () => {
    setLoading(true);
    console.log(process.env.PRIVATE_API_URL + "/generate-evaluation-report/")
    fetch(process.env.NEXT_PUBLIC_API_URL + "/generate-evaluation-report/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => (response.json()))
    .then(data => {
      setReport(data);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className={`w-full flex gap-8 ${className}`} {...props}>
      <div className={`w-[40%] flex flex-col gap-4 ${className}`} {...props}>
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
          onChange={(e) =>
            setFormData({ ...formData, project: e.target.value })
          }
          placeholder={
            projects.length === 0 ? "Sélectionnez un parcours d'abord" : ""
          }
          className="w-full"
        />
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
          className="w-full h-10 text-white flex justify-center items-center"
        >
          {loading ? (
            <Spinner className="size-6" spinnerColor="white" />
          ) : (
            "Générer le rapport"
          )}
        </Button>
      </div>
      <div className="w-[60%]">
        <p className="mb-1">Compte-rendu</p>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_TOKEN}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
              'emoticons'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help | emoticons'
          }}
          value={report}
          onEditorChange={(content, editor) => {
            setReport(content);
          }}
        />
      </div>
    </div>
  );
}
