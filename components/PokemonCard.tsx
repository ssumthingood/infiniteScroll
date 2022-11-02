import { LazyLoadImage } from "react-lazy-load-image-component";

const PokemonCard = ({ id, name }: { id: string; name: string }) => {
    return (
        <a href={`/pokemon/${id}`} key={id}>
            {/* // img 태그 대신에 LazyLoadImage 컴포넌트를 사용해 준다. // 일반적인 사용법은 img태그와 같다. */}
            <LazyLoadImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <div>
                <div>
                    <p>ID</p>
                    <p>{id}</p>
                </div>
                <div>
                    <p>name</p>
                    <p>{name}</p>
                </div>
            </div>
        </a>
    );
};

export default PokemonCard;
