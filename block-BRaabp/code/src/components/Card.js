import fonts from "../data/font-families.json";

function Card (props) {
  console.log(props.renderInfo);
  const inlineStyle = {
    "fontSize": `${props.renderInfo.size}px`,
    "fontFamily": `${props.fontInfo["font-name"]}, sans-serif`
  }
  return (
    <div className="card p-4 rounded-md border border-gray-400">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl text-gray-700">{props.fontInfo["font-name"]}</h2>
          <p>{props.fontInfo["created-by"]}</p>
        </div>
        <span>{props.fontInfo.styles} styles</span>
      </div>
      <div style={inlineStyle} className="break-words py-4">
        <p>{props.renderInfo.text}</p>
      </div>
    </div>
  )
}

function Cards (props) {
  return (
    fonts.map((font) => <Card fontInfo={font} renderInfo={props.renderInfo} key={font["font-name"].toLowerCase()} />)
  )
}

export default Cards;