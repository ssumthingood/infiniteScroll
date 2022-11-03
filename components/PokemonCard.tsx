import { useObserver } from "@libs/useObserver";
import Link from "next/link";
import { MutableRefObject, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useLocalStorage from "use-local-storage";

const PokemonCard = ({ id, name }: { id: string; name: string }) => {
    const target: MutableRefObject<null> = useRef(null);
    const [scrollY, setScrollY] = useLocalStorage("poke_list_scroll", "0");
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
        <Link legacyBehavior href={`/pokemon/${id}`} key={name}>
            {/* Link legacyBehavior일 경우에만 스크롤 위치 저장 작동 
            최신 버전은 Link태그와 a 태그의 양립을 지원하지 않기 때문에 오류 발생*/}
            <a ref={target} onClick={() => setScrollY(window.scrollY.toString())}>
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
        </Link>
    );
};

export default PokemonCard;
