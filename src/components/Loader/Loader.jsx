import { Oval } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';


const Loader = () => {
    return (
        <div className={css.loaderWrapper}>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#ffbf47"
                secondaryColor="#ffbf47"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}


export default Loader;