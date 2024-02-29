import { faHorseHead } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultLogo = () => {
    return (
        <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Pegasus</span>
            <FontAwesomeIcon
                icon={faHorseHead}
                className="h-10 w-10 text-primary"
                aria-hidden="true"
            />
            <span className="ml-2 text-2xl font-extrabold text-primary">
                Pegasus
            </span>

        </a>
    );
}


export default DefaultLogo;
