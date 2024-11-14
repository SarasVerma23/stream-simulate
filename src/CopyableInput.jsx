import { useState } from "react";

const CopyableInput = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="mt-3 position-relative w-100">
      <input
        type="text"
        className="form-control py-3 text-muted bg-light border"
        value={url}
        readOnly
      />

      <span
        id="icon"
        className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-secondary p-2"
        onClick={handleCopy}
      >
        {!copied ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Font_Awesome_5_regular_copy.svg"
            alt="copy"
            style={{ width: "30px", height: "30px" }}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Green_tick.svg"
            alt="tick"
            style={{ width: "30px", height: "30px" }}
          />
        )}
      </span>
    </div>
  );
};

export default CopyableInput;
