"use client";
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { generateEvaluationReport } from "@/lib/api";
import toast from "react-hot-toast";

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
    setFormData({ ...formData, course: e.target.value, project: ""});
    setProjects(
      data[e.target.value].projects.map((project) => {
        return {
          label: project.position + " - " + project.name,
          value: project.id,
        };
      })
    );
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    generateEvaluationReport(formData.project, formData.notes).then((response) => {
      setReport(response.data.result);
    }).catch((error) => {
      console.error(error);
      toast.error("Une erreur s'est produite lors de la génération du rapport.");
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className={`w-full flex flex-wrap md:flex-nowrap gap-8 ${className}`} {...props}>
      <form onSubmit={handleSubmit} className={`w-full md:w-[40%] flex flex-col gap-4 ${className}`} {...props}>
        <select 
          required
          className="select select-bordered w-full bg-white"
          value={formData.course}
          onChange={handleCourseChange}
        >
          <option disabled selected value="">Choisissez un parcours</option>
          {courses.map((course) => (
            <option key={course.value} value={course.value}>
              {course.label}
            </option>
          ))}
        </select>
        <select 
          required
          className="select select-bordered w-full bg-white"
          disabled={projects.length === 0}
          value={formData.project}
          onChange={(e) =>
            setFormData({ ...formData, project: e.target.value })
          }
        >
          <option disabled selected value="">{
            projects.length === 0 ? "Sélectionnez d'abord un parcours d'abord" : "Choisissez un projet"
          }</option>
          {projects.map((course) => (
            <option key={course.value} value={course.value}>
              {course.label}
            </option>
          ))}
        </select>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Informations</span>
          </div>
          <textarea 
            rows={10}
            className="textarea textarea-bordered bg-white" 
            placeholder="Renseignez ici les informations que vous voulez intégrer au compte-rendu."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Générer le rapport"
          )}
        </button>
      </form>
      <div className="w-full md:w-[60%]">
        <div className="label">
          <span className="label-text">Compte-rendu</span>
          {loading && <span className="label-alt loading loading-spinner"></span>}
        </div>
        <Editor
          disabled={loading || !report}
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_TOKEN}
          init={{
            height: 500,
            menubar: false,
            plugins: [
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
