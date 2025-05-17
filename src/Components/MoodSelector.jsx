import React from "react";
import './MoodSelector.css'

const moods = [
  { id: "amazing", emoji: "😁", label: "Amazing", color: "#a3e635" }, // green
  { id: "good", emoji: "🙂", label: "Good", color: "#60a5fa" },       // blue
  { id: "okay", emoji: "😐", label: "Okay", color: "#facc15" },       // yellow
  { id: "bad", emoji: "😔", label: "Bad", color: "#f97316" },         // orange
  { id: "awful", emoji: "😭", label: "Awful", color: "#ef4444" },     // red
];

export function MoodSelector({ selectedMood, onSelectMood }) {
  return (
    <>
      <div className="mood-selector">
        <div className="mood-selector-header">
          <h1>How are you Feel Today?</h1>
          <p>Select The Mood That Best Describes How You Feel</p>
        </div>

        <div className="mood-selector-content">
          {moods.map((mood)=>(
            <button key={mood.id}
              onClick={()=>onSelectMood(mood.label)}
              className={selectedMood === mood.label? "selected":""}
              style={{ backgroundColor: selectedMood === mood.label ? mood.color : mood.color+33 ,border:`2px solid ${mood.color}`}}
              >
              <span>{mood.emoji}</span>
              <h2>{mood.label}</h2>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
