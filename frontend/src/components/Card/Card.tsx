import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICardData } from "../../interfaces/cards";

const Card: FC<ICardData> = ({ id, image, name }) => {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState<string>("");

  const handleNavigate = () => {
    navigate(`/detail/${id}`);
  };

  const handleCommentClick = () => {
    setShowCommentInput(true);
  };

  const handleAddComment = () => {
    console.log(`Comment added: ${comment}`);
  };

  return (
    <div
      className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-green-200 m-4"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => {
        setShowButtons(false);
        setShowCommentInput(false);
      }}
    >
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{name}</p>
      </div>
      {showButtons && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black bg-opacity-50">
          <button
            className="mb-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleNavigate}
          >
            Go to Detail
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={handleCommentClick}
          >
            Add Comment
          </button>
        </div>
      )}
      {showCommentInput && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-black bg-opacity-50">
          <input
            type="text"
            className="mb-2 p-2 rounded"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleAddComment}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
