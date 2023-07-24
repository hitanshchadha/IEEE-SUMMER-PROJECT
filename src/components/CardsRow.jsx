import Card from "./card.jsx"
function CardsRow(){
    const myStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:"40px 0 120px 0",
        padding:"0px",
    };
    return <div style={myStyle}>
        <Card 
        status1="Lost"
        itemName="Keys"
        time="3:34 PM"
        location="Rotunda"
        date="10th June"
        />
        <Card 
        status1="Lost"
        itemName="Airpods"
        time="5:52 PM"
        location="NAB"
        date="15th June"
        />
        <Card 
        status1="Lost"
        itemName="Speaker"
        time="7:05 PM"
        location="Krishna QT"
        date="21st April"
        />
        <Card 
        status1="Lost"
        itemName="Speaker"
        time="7:05 PM"
        location="Krishna QT"
        date="21st April"
        />
        <div className="viewMore">
            <h4 style={{fontFamily:"'Inter', sans-serif"}}>View More</h4>
        </div>
    </div>
}
export default CardsRow;