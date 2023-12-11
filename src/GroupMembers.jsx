import "./GroupMembers.css";

const GroupMembers = () => {
  const members = [
    "Tsion", "Teklu", "Yishak", "Yabets","Wondwoson", "Saron","Semira","Samrawit","Sefina","Senait","Yordanos",
  ];

  return (
    <div>
      <h1>
        <u>React Group 4 Members Name</u>
      </h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
