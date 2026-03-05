import { createContext, useContext, useState } from "react";
import { useSharedValue } from "react-native-reanimated";

const GameContext = createContext({} as any);

export function GameProvider({ children }: any) {
  const [jumping, setJumping] = useState(false);
  const [score, setScore] = useState(0);
  const dinoheight = useSharedValue(0);

  function jump() {
    setJumping(true);
  }

  function stopJump() {
    setJumping(false);
  }

  return (
    <GameContext.Provider
      value={{ jumping, jump, stopJump, score, setScore, dinoheight }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
