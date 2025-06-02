import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import LabeledInput from './components/LabeledInput';
import Button from './components/Button';

function App() {
    function onFormSubmit(event) {
        event.preventDefault();
        console.log({
            ...formState,
            ...fruits
        });
    }

    const [fruits, setFruits] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    });

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        postcode: '',
        deliveryFrequency: 'weekly',
        deliveryPeriod: 'day',
        comments: '',
        termsAccepted: false,
    });

    function handleFruitChange(fruit, amount) {
        setFruits(prevFruits => ({
            ...prevFruits,
            [fruit]: Math.max(0, prevFruits[fruit] + amount),
        }));
    }

    function handleFormChange(event) {
        const changedFieldName = event.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        });
    }

    const handleReset = () => {
        setFruits({ strawberries: 0, bananas: 0, apples: 0, kiwis: 0 });
    };

    return (
        <>
            <Counter
                label="🍓 Aarbeien"
                value={fruits.strawberries}
                onDecrement={() => handleFruitChange('strawberries', -1)}
                onIncrement={() => handleFruitChange('strawberries', 1)}
                highlight={fruits.strawberries > 0}
            />
            <Counter
                label="🍌 Bananen"
                value={fruits.bananas}
                onDecrement={() => handleFruitChange('bananas', -1)}
                onIncrement={() => handleFruitChange('bananas', 1)}
                highlight={fruits.bananas > 0}
            />
            <Counter
                label="🍏 Appels"
                value={fruits.apples}
                onDecrement={() => handleFruitChange('apples', -1)}
                onIncrement={() => handleFruitChange('apples', 1)}
                highlight={fruits.apples > 0}
            />
            <Counter
                label="🥝 Kiwi's"
                value={fruits.kiwis}
                onDecrement={() => handleFruitChange('kiwis', -1)}
                onIncrement={() => handleFruitChange('kiwis', 1)}
                highlight={fruits.kiwis > 0}
            />
            <Button className="reset-btn" onClick={handleReset}>
                Reset
            </Button>

            <form onSubmit={onFormSubmit}>
                <LabeledInput
                    label="Voornaam"
                    id="first-name"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleFormChange}
                />
                <LabeledInput
                    label="Achternaam"
                    id="last-name"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleFormChange}
                />
                <LabeledInput
                    label="Leeftijd"
                    id="age"
                    name="age"
                    value={formState.age}
                    onChange={handleFormChange}
                />
                <LabeledInput
                    label="Postcode"
                    id="postcode"
                    name="postcode"
                    value={formState.postcode}
                    onChange={handleFormChange}
                />
                <label htmlFor="delivery-frequency">
                    Bezorgfrequentie
                    <select
                        id="delivery-frequency"
                        name="delivery-frequency"
                        value={formState.deliveryFrequency}
                        onChange={handleFormChange}
                    >
                        <option value="weekly">Wekelijks</option>
                        <option value="every-other-week">Om de week</option>
                        <option value="monthly">Maandelijks</option>
                    </select>
                </label>
                <div>
                    <label className="delivery-period-radio" htmlFor="delivery-period-day">
                        <input type="radio"
                            id="delivery-period-day"
                            name="deliveryPeriod"
                            value="day"
                            checked={formState.deliveryPeriod === "day"}
                            onChange={handleFormChange}
                        />
                        Overdag
                    </label>
                    <label className="delivery-period-radio" htmlFor="delivery-period-evening">
                        <input type="radio"
                            id="delivery-period-evening"
                            name="deliveryPeriod"
                            value="evening"
                            checked={formState.deliveryPeriod === "evening"}
                            onChange={handleFormChange}
                        />
                        's Avonds
                    </label>
                </div>
                <p>Opmerking</p>
                <label htmlFor="comments">
                    <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        cols="50"
                        value={formState.comments}
                        onChange={handleFormChange}
                    ></textarea>
                </label>
                <label htmlFor="terms">
                    <input type="checkbox"
                        id="terms"
                        name="termsAccepted"
                        checked={formState.termsAccepted}
                        onChange={handleFormChange}
                    />
                    Ik ga akkoord met de algemene voorwaarden
                </label>
                <Button type="submit">
                    Verzend
                </Button>
            </form>
        </>
    );
}

export default App;
