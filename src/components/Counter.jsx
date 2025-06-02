function Counter({ label, value, onDecrement, onIncrement, highlight }) {
    return (
        <section className={highlight ? 'green' : ""}>
            <h2>{label}</h2>
            <button onClick={onDecrement}>-</button>
            <span> {value} </span>
            <button onClick={onIncrement}>+</button>
        </section>
    );
}

export default Counter;

