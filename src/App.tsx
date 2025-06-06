import dayjs from "dayjs";
import jalaliday from "jalaliday";

function App() {
  dayjs.extend(jalaliday);

  const now = dayjs().calendar("jalali");
  const startOfYear = now.startOf("year");
  const endOfYear = now.endOf("year");
  const daysInYear = endOfYear.diff(startOfYear, "day");
  const passedDays = now.diff(startOfYear, "day") - 1;

  console.log(passedDays)
  console.log(daysInYear)

  return (
    <div className="max-w-3xl w-full mx-auto py-8 px-4 grid grid-cols-20 gap-4">
      {
        Array.from({length: daysInYear}).map((_, index) => (
          <div key={index} className={`size-4 border border-white rounded ${index < passedDays ? "bg-white" : ""} ${passedDays === index ? "ring-2 ring-white" : ""}`}></div>
        ))      
      }
    </div>
  )
}

export default App
