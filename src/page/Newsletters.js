const Newsletters = () => {
  const inputStyle = { height: '40px', borderRight: 'none' };
  const buttonStyle = {
    background: 'red',
    color: 'white',
    border: 'solid black 1px',
    height: '40px',
    borderLeft: 'none',
  };

  return (
    <>
      <h3>Newsletters</h3>
      <p>Sigh up to receive the latest sports news</p>
      <div>
        <input type="text" placeholder="Email Address" style={inputStyle} />
        <button style={buttonStyle}>Subscribe</button>
      </div>
    </>
  );
};

export default Newsletters;
