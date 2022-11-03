import { useObserver } from "@libs/useObserver";
import { MutableRefObject, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import useLocalStorage from "use-local-storage";

const PokemonCard = ({ id, name }: { id: string; name: string }) => {
    const target: MutableRefObject<null> = useRef(null);
    // const [scrollY, setScrollY] = useLocalStorage("poke_list_scroll", 0);
    const [visible, setVisible] = useState(false);

    const onIntersect: ([entry]: any) => any = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1,
        root: null,
        rootMargin: "",
    });

    return (
        <a href={`/pokemon/${id}`} key={id} ref={target} onClick={() => localStorage.setItem("poke_list_scroll", window.scrollY.toString())}>
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
