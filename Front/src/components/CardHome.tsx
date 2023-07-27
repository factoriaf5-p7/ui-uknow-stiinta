import TagDifficulty from "@/UI/TagDifficulty"

function CardHome() {
  return (
    <section className="card-home">
        <div className="image-section">
            {/* fondo con imagen del curso */}
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