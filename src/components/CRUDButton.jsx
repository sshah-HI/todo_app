export default function CRUDButton({
  type,
  i_className,
  className,
  onClick,
  id,
}) {
  return (
    <div>
      <button type={type} className={className} onClick={onClick} id={id}>
        <i className={i_className}></i>
      </button>
    </div>
  );
}
