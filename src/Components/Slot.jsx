import React, { useState } from "react";
import "../Style/Slot.css";

const Slot = () => {
  const [select, setSelect] = useState(null);

  const slotsArray = [
    { id: "1", day: "Sunday", date: "16-02-2025", start_time: "07", end_time: "08", price: "500", uni_id: "uid_1" },
    { id: "2", day: "Sunday", date: "16-02-2025", start_time: "08", end_time: "09", price: "500", uni_id: "uid_2" },
    { id: "3", day: "Sunday", date: "16-02-2025", start_time: "09", end_time: "10", price: "500", uni_id: "uid_3" },
    { id: "4", day: "Sunday", date: "16-02-2025", start_time: "10", end_time: "11", price: "500", uni_id: "uid_4" },
    { id: "5", day: "Sunday", date: "16-02-2025", start_time: "11", end_time: "12", price: "500", uni_id: "uid_5" },
    { id: "6", day: "Sunday", date: "16-02-2025", start_time: "12", end_time: "01", price: "500", uni_id: "uid_6" },
    { id: "7", day: "Sunday", date: "16-02-2025", start_time: "01", end_time: "02", price: "500", uni_id: "uid_7" },
    { id: "8", day: "Sunday", date: "16-02-2025", start_time: "02", end_time: "03", price: "500", uni_id: "uid_8" },
  
    { id: "9", day: "Monday", date: "17-02-2025", start_time: "07", end_time: "08", price: "400", uni_id: "uid_9" },
    { id: "10", day: "Monday", date: "17-02-2025", start_time: "08", end_time: "09", price: "400", uni_id: "uid_10" },
    { id: "11", day: "Monday", date: "17-02-2025", start_time: "09", end_time: "10", price: "400", uni_id: "uid_11" },
    { id: "12", day: "Monday", date: "17-02-2025", start_time: "10", end_time: "11", price: "400", uni_id: "uid_12" },
    { id: "13", day: "Monday", date: "17-02-2025", start_time: "11", end_time: "12", price: "400", uni_id: "uid_13" },
    { id: "14", day: "Monday", date: "17-02-2025", start_time: "12", end_time: "01", price: "400", uni_id: "uid_14" },
    { id: "15", day: "Monday", date: "17-02-2025", start_time: "01", end_time: "02", price: "400", uni_id: "uid_15" },
    { id: "16", day: "Monday", date: "17-02-2025", start_time: "02", end_time: "03", price: "400", uni_id: "uid_16" },
  
    { id: "17", day: "Tuesday", date: "18-02-2025", start_time: "07", end_time: "08", price: "400", uni_id: "uid_17" },
    { id: "18", day: "Tuesday", date: "18-02-2025", start_time: "08", end_time: "09", price: "400", uni_id: "uid_18" },
    { id: "19", day: "Tuesday", date: "18-02-2025", start_time: "09", end_time: "10", price: "400", uni_id: "uid_19" },
    { id: "20", day: "Tuesday", date: "18-02-2025", start_time: "10", end_time: "11", price: "400", uni_id: "uid_20" },
    { id: "21", day: "Tuesday", date: "18-02-2025", start_time: "11", end_time: "12", price: "400", uni_id: "uid_21" },
    { id: "22", day: "Tuesday", date: "18-02-2025", start_time: "12", end_time: "01", price: "400", uni_id: "uid_22" },
    { id: "23", day: "Tuesday", date: "18-02-2025", start_time: "01", end_time: "02", price: "400", uni_id: "uid_23" },
    { id: "24", day: "Tuesday", date: "18-02-2025", start_time: "02", end_time: "03", price: "400", uni_id: "uid_24" },
  
    { id: "25", day: "Friday", date: "21-02-2025", start_time: "07", end_time: "08", price: "500", uni_id: "uid_25" },
    { id: "26", day: "Friday", date: "21-02-2025", start_time: "08", end_time: "09", price: "500", uni_id: "uid_26" },
    { id: "27", day: "Friday", date: "21-02-2025", start_time: "09", end_time: "10", price: "500", uni_id: "uid_27" },
    { id: "28", day: "Friday", date: "21-02-2025", start_time: "10", end_time: "11", price: "500", uni_id: "uid_28" },
    { id: "29", day: "Friday", date: "21-02-2025", start_time: "11", end_time: "12", price: "500", uni_id: "uid_29" },
    { id: "30", day: "Friday", date: "21-02-2025", start_time: "12", end_time: "01", price: "500", uni_id: "uid_30" },
    { id: "31", day: "Friday", date: "21-02-2025", start_time: "01", end_time: "02", price: "500", uni_id: "uid_31" },
    { id: "32", day: "Friday", date: "21-02-2025", start_time: "02", end_time: "03", price: "500", uni_id: "uid_32" },
  ];
  
  const groupedSlots = slotsArray.reduce((acc, slot) => {
    if (!acc[slot.start_time + " to " + slot.end_time]) {
      acc[slot.start_time + " to " + slot.end_time] = {};
    }
    acc[slot.start_time + " to " + slot.end_time][slot.day] = slot.price;
    return acc;
  }, {});
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const uniqueDates = [...new Set(slotsArray.map(slot => slot.date))];
  return (
  
  <div className="table-container">
  <table className="pavilion-table">
    <thead>
      <tr className="header-row">
        <th className="time-slot-header">Time Slot</th>
        {days.map((day) => (
          <th key={day} className="day-header">{day}</th>
          
        ))}
         {/* {uniqueDates.map((date) => (
          <th key={date} className="date-header">{date}</th>
        ))} */}
      </tr>
    </thead>
    <tbody>
      {Object.entries(groupedSlots).map(([timeSlot, slots]) => (
        <tr key={timeSlot} className="data-row">
          <th className="time-slot">{timeSlot}</th>
          {days.map((day) => (
            <td
              key={day}
              className="data-cell" 
              // className={`data-cell ${slots[day] === "500" ? "500" : ""}`}
            >
              {slots[day] || "-"}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default Slot;
