export default function CRUDButton({
  type,
  iconClassName,
  className,
  onClick,
  id,
}) {
  return (
    <div>
      <button type={type} className={className} onClick={onClick} id={id}>
        <i className={iconClassName}></i>
      </button>
    </div>
  );
}
