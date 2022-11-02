import axios from "axios";

const Pokemon = ({ data }: any) => {
    const { name, types, id, base_experience, abilities, order } = data;

    /* //... data에서 맘에 드는 항목을 골라 자유롭게 편집한다. */
    return (
        <>
            <div>
                <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
                    <h1>{name}</h1>
                </div>

                <div>
                    <div>
                        <p>ID</p>
                        <p>{id}</p>
                    </div>

                    <div>
                        <p>도감순서</p>
                        <p>No. {order}</p>
                    </div>

                    <div>
                        <p>기본 경험치</p>
                        <p>{base_experience} exp</p>
                    </div>
                    <div>
                        <p>타입</p>
                        {types.map((item) => (
                            <span key={item.slot}>{item.type.name} </span>
                        ))}
                    </div>

                    <div>
                        <p>특성</p>
                        {abilities.map((item, index) => (
                            <span key={item.slot}>
                                {item.ability.name}
                                {abilities.length !== index + 1 ? ", " : ""}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// SSR로 데이터를 처리
export const getServerSideProps = async ({ params }: any) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`);

    return { props: { data } };
};

export default Pokemon;
