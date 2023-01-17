import { useState, useEffect } from "react";
import Card from "../components/Card";

function Missions(props) {
  const [userMissions, setUserMissions] = useState([]);
  const [missionCards, setMissionCards] = useState([]);

  props.socket.on("getMissions", myFunction);

  function myFunction(users) {
    console.log(users)
    setUserMissions(users.missions);
  }
  useEffect(() => {
    setMissionCards(
      userMissions.map((mission) => {
        return <Card key={mission} mission={mission} />;
      })
    );
  }, [userMissions]);

  return (
    <div className="flex flex-col items-center mt-8 mb-8 gap-4 px-4 text-center text-ming">
      <h1 className="font-['Archivo_Black'] text-white text-4xl mb-4">
        Missions
      </h1>

      {missionCards}
    </div>
  );
}

export default Missions;
