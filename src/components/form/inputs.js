const labelSpacing = "mb-2";

export function Input({ className, label, ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className={`${labelSpacing}`}>{label}</label>}
      <input className="p-2 border-2 border-gray-200 rounded-lg" {...props} />
    </div>
  );
}

export function TextInput({ className, label, ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className={`${labelSpacing}`}>{label}</label>}
      <textarea className="p-2 border-2 border-gray-200 rounded-lg" {...props} />
    </div>
  );
}

export function SelectInput({ className, label, options, placeholder, ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className={`${labelSpacing}`}>{label}</label>}
      <select className="p-2 border-2 border-gray-200 rounded-lg disabled:bg-gray-200" {...props}>
        <option hidden value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
