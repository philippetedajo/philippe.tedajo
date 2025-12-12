import "./frame.css";

type Props = {
  radius?: string;
};

export const Frame = ({ radius }: Props) => {
  const createFrames = () => {
    const frames = [];

    for (let i = 0; i < 15; i++) {
      frames.push(
        <div key={i} className="vr_layer">
          <div className={`vr_layer_item_frame rounded ${radius} `} />
        </div>
      );
    }
    return frames;
  };

  return (
    <div className="container">
      <div className="monitor">
        <div className="camera o-x">
          <div className="camera o-y">
            <div className="camera o-z">
              <div className="vr">{createFrames()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
