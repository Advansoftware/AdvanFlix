import Poster from "./poster";

const Items = ({ data }) => {
    return (
        <>
            {!!data && data.map((item, index) => (
                <>
                    {item.group === "Filmes | Lançamentos" ? <Poster item={item} index={index} /> :
                        item.group === "Filmes | Comédia" ? <Poster item={item} index={index} /> : ''
                    }
                </>
            ))}
        </>
    );
}
export default Items;