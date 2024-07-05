
const OL: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({ children, ...props }) => {
    return (
      <ol className="list-decimal list-inside my-6 space-y-2" {...props}>
        {children}
      </ol>  
    );
}

export default OL;