import classes from './QuoteForm.module.css';

export const QuoteForm = () => {
  return (
    <>
      quote form
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='name'>name</label>
          <input type='text' required id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>email</label>
          <input type='text' required id='email' />
        </div>
        {/* put multicheckbox here... */}
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </form>
    </>
  );
};
