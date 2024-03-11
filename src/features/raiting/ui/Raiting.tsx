// import React from "react";

// interface Player {
//   id: number;
//   name: string;
//   score: number;
// }

// interface RatingProps {
//   players: Player[];
// }

// const Rating: React.FC<RatingProps> = ({ players }) => {
//   const sortedPlayers = players.sort((a, b) => b.score - a.score);
//   const topPlayers = sortedPlayers.slice(0, 5);

//   return (
//     <div>
//       <h2>Top 5 Players</h2>
//       <ul>
//         {topPlayers.map((player) => (
//           <li key={player.id}>
//             {player.name} - Score: {player.score}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Rating;
