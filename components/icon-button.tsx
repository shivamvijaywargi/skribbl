const IconButton = ({
  title = "",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div className="hover:bg-muted p-2 rounded transition cursor-pointer grid place-items-center">
    <span title={title}>{children}</span>
  </div>
);

export default IconButton;
