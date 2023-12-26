import timeline from "./timeline";

const TimelineContainer = ({ role, company, duration, description, cssStyle }: timeline) => {
    return (
        <>
            <div className="timeline">
                <div className={cssStyle}>
                    <div className="content">
                        <h3 className="timeline-role">{role}, {company}</h3>
                        <h3 className="timeline-duration">{duration}</h3>
                        <ul>
                            {description && description.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TimelineContainer;