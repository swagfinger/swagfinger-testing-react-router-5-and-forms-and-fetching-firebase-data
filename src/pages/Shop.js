import { QuoteForm } from '../components/forms';
export const Shop = () => {
  const onAddQuoteHandler = (collectedData) => {
    console.log(collectedData);
    fetch(
      'https://swagfinger-form-capture-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json',
      {
        method: 'POST',
        body: JSON.stringify(collectedData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <section>
      <h1>shop</h1>
      <QuoteForm onAdd={onAddQuoteHandler} />
    </section>
  );
};
