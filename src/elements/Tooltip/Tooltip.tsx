import ReactTooltip from 'react-tooltip';

type TooltipType = { children: React.ReactNode; title: string };

export const Tooltip = ({ children, title }: TooltipType) => {
  return (
    <>
      <div data-tip={title}>{children}</div>
    </>
  );
};

export const ReactTooltipCustom = () => (
  <ReactTooltip
    place="right"
    padding="3px 16px"
    arrowColor="transparent"
    delayShow={300}
    delayHide={100}
    overridePosition={({ left, top }: any, currentEvent: any) => ({
      left: currentEvent.x - 30,
      top: currentEvent.y + 30,
    })}
  />
);
