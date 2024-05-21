export type TToggleProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Toggle = (p: TToggleProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-4">
        <span className="label-text">{p.label}</span>
        <div className="flex flex-1">
          <input
            type="checkbox"
            className="toggle"
            checked={p.value}
            onChange={() => p.onChange(!p.value)}
          />
        </div>
      </label>
    </div>
  );
};
