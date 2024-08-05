// Settings2.jsx
const Settings2 = ({ toggleDarkMode }) => {
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default Settings2;
