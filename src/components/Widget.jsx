export default function Widget({ title, children }) {
    return (
        <div className="widget">
            <h2>{title}</h2>
            {children}
        </div>
    );
}
