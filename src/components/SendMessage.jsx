const SendMessage = () => {
  return (
    <section>
      <h1>Send us a message</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="message">Enter your message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </form>
    </section>
  );
};

export default SendMessage;
