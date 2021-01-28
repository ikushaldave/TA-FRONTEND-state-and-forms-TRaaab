import data from "./data.json"

const peoples = data.reduce((acc, cv) => {
  acc[cv.name] = cv.people.map((people) => people.name);
  return acc
}, {})

function Result (props) {
  let h3;
  if(!props.house || !props.person) {
    h3 = <h3>Please Select a House and a Person</h3>
  } else {
		h3 = <h3>{props.house && props.person && peoples[props.house].some((name) => name === props.person) ? "It's a match" : "Sorry try again"}</h3>;
  }
  return (
    <>
      {h3}
    </>
  )
}

export default Result;