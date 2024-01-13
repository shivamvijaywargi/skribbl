const IconButton = ({ children }: { children: React.ReactNode }) => (
  <div className="hover:bg-muted p-2 rounded transition cursor-pointer grid place-items-center">
    {children}
  </div>
);

export default IconButton;
