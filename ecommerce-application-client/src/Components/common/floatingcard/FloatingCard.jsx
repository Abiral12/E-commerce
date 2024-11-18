import './float.css'

const FloatingCard = ({card}) => {
  return (
    <>
        <div className="card level-3" >
	<h5>title :{card.title}</h5>

    
</div>
<div>
  <button className="btn btn-primary" style={{margin:"5px"}}>button :{card.cardName}</button>
</div>


    </>


  )
}

export default FloatingCard
