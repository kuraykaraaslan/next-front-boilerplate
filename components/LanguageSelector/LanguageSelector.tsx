import { US , TR } from 'country-flag-icons/react/3x2'


const LanguageSelector = () => {
    return (
            <details className="dropdown pl-2">
                <summary className="btn btn-ghost focus:none hover:none"><TR className="w-6 h-6" /> Türkçe</summary>
                <ul className="shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-100">
                    <li><div><TR className="w-6 h-6" /> Türkçe</div></li>
                    <li><div><US className="w-6 h-6" /> English</div></li>
                </ul>
            </details>
    );
}

export default LanguageSelector;
