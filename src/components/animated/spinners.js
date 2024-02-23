export default function Spinner({ className, spinnerColor }) {
    const _color = spinnerColor || "white";
  return (
    <div className={`animate-spin rounded-full border-4 border-t-transparent border-inherit ${className}`}></div>
  )
}