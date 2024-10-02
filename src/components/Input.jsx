export default function Input({ title, label, value, handleChange }) {
  return (
    <p>
      <label htmlFor={title}>{label}</label>
      <input
        type="number"
        name={title}
        id={title}
        value={value}
        onChange={(e) => handleChange(title, e)}
        required
      />
    </p>
  );
}
