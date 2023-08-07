import Lottie from "lottie-react"
import cocktailLoading from "../../lotties/cocktail-loading.json"

export default function Spinner() {
    const options = {
        loop: true,
        animationData: cocktailLoading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const style = {
        height: 200,
    };
    /*    
    Tambien se puede usar, pero no se como modificar los estilos
    const { View } = useLottie(options);
    */
    return (
        <Lottie
            animationData={cocktailLoading}
            style={style}
        />
    );
}