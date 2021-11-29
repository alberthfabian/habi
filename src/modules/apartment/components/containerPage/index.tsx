import Control from "../form/control";

export const ContainerPage = ({
  name,
  type,
  label,
  placeholder,
  options,
}: any) => {
  return (
    <div>
      <Control
        key={name}
        type={type as any}
        name={name}
        label={label}
        placeholder={placeholder}
        options={options}
      />
      <br />
    </div>
  );
};

export default ContainerPage;
