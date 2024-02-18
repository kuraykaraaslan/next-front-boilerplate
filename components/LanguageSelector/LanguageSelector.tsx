
const LanguageSelector = () => {
    return (
        <>
            <details className="dropdown">
                <summary className="btn btn-ghost hover:none">Language</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-100">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>

        </>
    );
}

export default LanguageSelector;
