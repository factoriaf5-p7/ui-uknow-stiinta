import TagDifficulty from "@/UI/TagDifficulty"

function CardHome() {
  return (
    <section className="card-home w-4/5 flex-col m-auto">
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat center ">
            
            <TagDifficulty 
                color="Advanced"
                children="Advanced" 
             />
            <div>4.3 stars</div>
            {/* componente valoracion */}
        </div>
        <div className="contain-section">
            <h3>Curso Nest.js</h3>
            <p>Explore all the most exciting job roles based on your interest and study major.</p>
            <div className="tags">
                componente tags
            </div>
            <div className="buttons-card">
                <button>Ver más</button>
                <button>Comprar</button>
                <p>50/kwl</p>
            </div>
        </div>

    </section>
    )
}

export default CardHome