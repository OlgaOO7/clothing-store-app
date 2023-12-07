export const Unsubscribe = () => {
  const handleUnsubscribe = () => {
    const currentUrl = window.location.search;
    const urlParams = new URLSearchParams(currentUrl);
    const email = urlParams.get('email');

    console.log('Email из URL:', email);
  };
  return (
    <section style={{ paddingTop: '100px' }}>
      <h2>Відписка від розсилки</h2>
      <p>Ви впевнені, що хочете відписатись?</p>
      <button onClick={handleUnsubscribe}>Відписатися</button>
    </section>
  );
};
