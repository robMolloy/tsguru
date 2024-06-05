const heightClassMap = {
  biggest: "h-32 sm:h-48",
  bigger: "h-16 sm:h-24",
  big: "h-10 sm:h-20",
};

export type TVerticalSpacingProps = {
  size: keyof typeof heightClassMap;
};

export const VerticalSpacing = (p: TVerticalSpacingProps) => {
  return <div className={heightClassMap[p.size]} />;
};
