// import "./DateCard.css";

// function DateCard({ date }) {
//   //   console.log(props.v.date);

//   return (
//     <li className="date-card">
//       <div
//         style={{
//           backgroundColor:
//             date % 7 === 0 ? "orange" : date % 7 === 1 ? "red" : "",
//         }}
//       >
//         {date}
//       </div>
//       <ul>
//         <li>🧹 청소하기</li>
//         <li>🏃‍♀️ 운동하기</li>
//         <li>🎲 게임하기</li>
//         <li>🌹 prayer</li>
//       </ul>
//     </li>
//   );
// }

// export default DateCard;

import "./DateCard.css";

function DateCard({ date, todos, isHoliday }) {
  console.log(isHoliday);

  return (
    <li className="date-card">
      <div
        className={isHoliday && "is-holiday"}
        style={{
          backgroundColor:
            date % 7 === 0
              ? "rgb(202, 250, 28)"
              : date % 7 === 1
              ? "rgb(254, 20, 40)"
              : "",
          color: date % 7 === 0 && "black",
        }}
      >
        {date}
      </div>
      <ul>
        {todos?.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </li>
  );
}

export default DateCard;
