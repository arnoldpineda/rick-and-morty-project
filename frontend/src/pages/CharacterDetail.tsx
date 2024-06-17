import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacter } from "../interfaces/character";
import { characters } from "../mocks/characters";
import BackButton from "../components/BackButton/BackButton";

function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [characterDetail, setCharacterDetail] = useState<ICharacter | null>(
    null
  );

  useEffect(() => {
    const selected = characters.find(
      (character: ICharacter) => character.id === Number(id)
    );
    setCharacterDetail(selected || null);
  }, [id]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 p-4">
      <div className="w-full flex justify-start mb-4">
        <BackButton />
      </div>
      {characterDetail ? (
        <>
          <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded shadow-lg w-full md:max-w-4xl mb-6">
            <img
              className="w-48 h-48 rounded-full md:mr-6 mb-4 md:mb-0"
              src={characterDetail.image}
              alt={characterDetail.name}
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 text-green-700">
                {characterDetail.name}
              </h1>
              <p className="text-green-600 text-lg mb-1">
                <span className="font-semibold">Status:</span>{" "}
                {characterDetail.status}
              </p>
              <p className="text-green-600 text-lg mb-1">
                <span className="font-semibold">Species:</span>{" "}
                {characterDetail.species}
              </p>
              <p className="text-green-600 text-lg mb-1">
                <span className="font-semibold">Gender:</span>{" "}
                {characterDetail.gender}
              </p>
              <p className="text-green-600 text-lg mb-1">
                <span className="font-semibold">Origin:</span>{" "}
                {characterDetail.origin.name}
              </p>
              <p className="text-green-600 text-lg">
                <span className="font-semibold">Location:</span>{" "}
                {characterDetail.location.name}
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded shadow-lg w-full md:max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Comments</h2>
            {characterDetail.comments.map((comment) => (
              <div key={comment.id} className="mb-3">
                <p className="text-green-600 text-lg">{comment.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-red-500 text-xl font-semibold">
          Character not found
        </p>
      )}
    </div>
  );
}

export default CharacterDetail;
