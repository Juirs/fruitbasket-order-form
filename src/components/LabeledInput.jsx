function LabeledInput({ label, id, name, value, onChange, type = 'text' }) {
    return (
        <label htmlFor={id}>
            {label}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default LabeledInput;

