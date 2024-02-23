export function Button({ children, className, ...props }) {
  return (
    <button
      className={`p-2 bg-primary hover:bg-secondary text-white rounded-lg transition ease-in-out duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}