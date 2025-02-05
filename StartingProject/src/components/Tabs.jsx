export default function Tabs({children, buttons, buttonsComponent = "menu"}) {
    const ButtonsComponent = buttonsComponent;
    return (
        <>
            <ButtonsComponent>
                {buttons}
            </ButtonsComponent>

            {/* Option 1 to render content conditionally
            { !clickedButtonId ? "<p>Please select a topic.</p>" :
                (
                <div id="tab-content">
                    <h3>{EXAMPLES[clickedButtonId].title}</h3>
                    <p>{EXAMPLES[clickedButtonId].description}</p>
                    <pre>{EXAMPLES[clickedButtonId].code}</pre>
                </div>
                )
            */}

            {/* Option 2 to render content conditionally
            { !clickedButtonId && "<p>Please select a topic.</p>" }
                { clickedButtonId &&
                (
                <div id="tab-content">
                    <h3>{EXAMPLES[clickedButtonId].title}</h3>
                    <p>{EXAMPLES[clickedButtonId].description}</p>
                    <pre>{EXAMPLES[clickedButtonId].code}</pre>
                </div>
                )}
            */}

            {/* Option 3 to render content conditionally */}
            {children}
        </>
    );
}